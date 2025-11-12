# Some Flowers

Simple static landing page with animated stars and blooming flowers built with HTML, CSS and vanilla JavaScript.

## Contents

- [index.html](index.html) — main entry page
- [pages/flowers.html](pages/flowers.html) — animated flowers scene
- [css/style.css](css/style.css) — global styles (background, title, button)
- [css/flowers.css](css/flowers.css) — flower / grass animations and layout
- [js/main.js](js/main.js) — startup logic for index page and title animation
- [js/animateTitleOnLoad.js](js/animateTitleOnLoad.js) — title animation for flowers page
- [js/stars.js](js/stars.js) — star generation utility (exports [`generateStars`](js/stars.js))
- images/ — icon and other image assets

## Usage

1. Open the project in a browser:
   - Double-click [index.html](index.html) or
   - Serve the folder with a static server (recommended), e.g.:
     - `npx serve .` or `npx http-server .`

2. Click "Open" to navigate to [pages/flowers.html](pages/flowers.html).

## Customization

- Edit the title text shown on index in [js/main.js](js/main.js).
- Edit the flowers page title in [js/animateTitleOnLoad.js](js/animateTitleOnLoad.js).
- Star field density/color: change parameters when calling [`generateStars`](js/stars.js) in [js/main.js](js/main.js) or [js/animateTitleOnLoad.js](js/animateTitleOnLoad.js).
- Styling and animations live in [css/style.css](css/style.css) and [css/flowers.css](css/flowers.css).

## Development notes

- No build step — plain static files.
- Animations pause while `.not-loaded` is present on the `body`. The flowers page removes this class after load in [js/animateTitleOnLoad.js](js/animateTitleOnLoad.js).

## Contributing

Small tweaks and fixes welcome. Create branches for feature changes and test by opening the HTML pages locally.
