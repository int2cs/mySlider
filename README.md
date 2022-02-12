mySlider
===
my little personal carousel
---

#### To start
you will need iconify for the arrow's slider.
add iconify script in your meta tag
```html
  <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
```

add script and style
```html
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="mySlider/mySlider.css" />
    <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
    <script src="mySlider/mySlider.js" defer></script>
  </head>
```

In your HTML page, create one division with id #slider
```html
<div id="slider"></div>
```

In your JavaScript file, instancie the new slider
```javascript
  const slider = document.querySelector("#slider");

  const mySlider = new Slider(slider);
```

Simply add your images
1) With relative/absolute URL
```javascript
  mySlider.addPicture("/src/img/nature-g9d6a43142_640.jpg");
  mySlider.addPicture("/src/img/finch-gd1dc050c4_640.jpg");
  mySlider.addPicture("/src/img/mountains-g4c9a152d2_640.jpg");
```
2) With external URL
```javascript
  mySlider.addPicture("https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278_960_720.jpg");
  mySlider.addPicture("https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg");
  mySlider.addPicture("https://cdn.pixabay.com/photo/2021/09/19/21/38/nature-6639127_960_720.jpg");
```

#### Options
you can use only 3 options (width, height and interval)

>if you don't specify interval option, your slider will be static.

```javascript
  const mySlider = new Slider(slider, {
  width: 900,
  height: 500,
  interval: 3000,
  });
```

![Screenshot](https://github.com/int2cs/3WAcademy/blob/main/Les%20Classes/Slider/mySlider/img/screenshot.png?raw=true)