class Slider {
  constructor(wrapper, options) {
    if (wrapper instanceof HTMLElement) {
      this.wrapper = wrapper;
    } else {
      throw "Élement HTML invalide";
    }

    this._width = 960;
    this._height = 720;
    this._interval = 0;

    if (options != null && typeof options === "object") {
      if (options.width && typeof options.width === "number") this._width = options.width;
      if (options.height && typeof options.height === "number") this._height = options.height;
      if (options.interval && typeof options.interval === "number") this._interval = options.interval;
    }

    this.pictures = [];
    this.currentSlide = 0;
    this._currentIndex = 0;
    this.playing = false;
  }

  getPictures() {
    return this.pictures;
  }

  addPicture(url) {
    // * https://developer.mozilla.org/fr/docs/Web/API/URL/URL

    const racine = new URL("/", "http://localhost:5500");
    try {
      let tmpURL = new URL(url, racine);
      // console.log(tmpURL);
      // this.pictures.push(tmpURL.href);
      this._createImage(tmpURL);
    } catch (e) {
      throw `URL (${url}) non valide !`;
    }

    this._displaySlider();
  }

  _createImage(url) {
    const image = document.createElement("img");
    image.setAttribute("src", url);
    image.classList.add(`img-${this.pictures.length === 0 ? 0 : this.pictures.length}`); // On ajoute l'index dans la classe css pour la recuperer au moment de changer de slide
    this.pictures.push(image);

    this._displaySlider();
  }

  _displaySlider() {
    this.wrapper.innerHTML = "";

    this.wrapper.style.width = this._width + "px";
    this.wrapper.style.height = this._height + "px";

    this.pictures.forEach((HtmlImgElement) => {
      this.wrapper.appendChild(HtmlImgElement);
    });

    this.pictures[0].classList.add("active");
    this._displayArrow();

    this._play();
  }

  _displayArrow() {
    const arrowPrev = document.createElement("div");
    arrowPrev.classList.add("arrowPrev");
    arrowPrev.innerHTML = `<span class="iconify" data-icon="mdi:arrow-left-thick" data-inline="false"></span>`;

    arrowPrev.addEventListener("click", this.prev);

    const arrowNext = document.createElement("div");
    arrowNext.classList.add("arrowNext");
    arrowNext.innerHTML = `<span class="iconify" data-icon="mdi:arrow-right-thick" data-inline="false"></span>`;

    arrowNext.addEventListener("click", this.next);

    this.wrapper.append(arrowPrev, arrowNext);
  }

  prev = () => {
    this.currentSlide = document.querySelector("#slider > img.active");
    this.currentSlide.classList.remove("active");

    this._currentIndex = Number(this.currentSlide.classList[0].split("-")[1]);

    if (this._currentIndex === 0) {
      this.pictures[this.pictures.length - 1].classList.add("active"); // SI index est de 0, alors on renvoit sur la derniere slide
    } else {
      this.pictures[this._currentIndex - 1].classList.add("active"); // SINON On donne la classe .active au slide precédent dans le tableau
    }
  };
  next = () => {
    this.currentSlide = document.querySelector("#slider > img.active");
    this.currentSlide.classList.remove("active");

    this._currentIndex = Number(this.currentSlide.classList[0].split("-")[1]);

    if (this._currentIndex === this.pictures.length - 1) {
      this.pictures[0].classList.add("active"); // SI on est sur la dernière slide, alors on renvoit sur la première slide
    } else {
      this.pictures[this._currentIndex + 1].classList.add("active"); // SINON On donne la classe .active au slide suivant dans le tableau
    }
  };

  _play() {
    if (!this.playing) {
      this.playing = true;
      if (this._interval) {
        setInterval(() => {
          mySlider.next();
        }, this._interval);
      }
    }
  }
}
