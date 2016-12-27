# screen-brightness
> Analyze screen contents to get brightness


## Installation
```bash
$ npm install --save screen-brightness
```


## Usage
```javascript
const screenBrightness = require('screen-brightness');

screenBrightness();   //=> 52.48828125
```

`screenBrightness` returns a number between `0` - `255`, depending on how bright the content on your
screen is.


## API

### screenBrightness([options])

#### options
Type: `Object`

##### columns
Type: `number`<br>
Default: `8`

Columns throughout the screen where points will be plotted.

##### points
Type: `number`<br>
Default: `32`

Total points to take color samples from.


## Related

- [lux](https://github.com/epilande/lux) - Adaptive brightness based on screen contents
