<img align="right" src="https://billrocha.netlify.app/Handmade.png" alt="Hand Made">

# gulp-img2b64

This is a simple **Gulp** plugin to convert from an **image** file stream **to base64**. 

## Install

Install as a "devDependencies" in your project:

```node
$ npm i -D gulp-img2b64
```

## Usage

This is an example of gulpfile.js.

```javascript
const gulp = require('gulp')
const b64 = require('gulp-img2b64')

const image = () => 
    src('src/img/*')
        .pipe(b64())
        .pipe(dest('public/img'))
```
- [x] Takes all compatible images (jpg, jpeg or png) from "./src/img" directory;
- [x] Convert to base64 (data URL);
- [x] Saves in "./public/img" with the original names changing the extension to ".b64".*

### Chained 
Use with **another** plugin for better image optimization:

```javascript
const gulp = require('gulp')
const b64 = require('gulp-img2b64')
const imagemin = require('gulp-imagemin')

const image = () => 
    src('src/img/*')
        .pipe(imagemin())
        .pipe(b64())
        .pipe(dest('public/img'))
```

See how [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) can help you.

## License

[MIT](https://mit-license.org) © [Bill Rocha](https://billrocha.netlify.com)