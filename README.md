# Jest Plugin Yeelight

A Jest plugin to change Yeelight Smart Light colors based on test results. When tests pass, your light turns green.
When tests are failing, your light turns red.

It's a great complement to your twitch or youtube streamings. Please, if you use this in your streamings,
it would be lovely if you gave me some credit, at least, once in a while.

Yeelight is the most common Xiaomi MI smart light.

I use this in my streamings for: https://github.com/jmarti-theinit/escape-blackout

You can watch my streamings here! https://twitch.tv/itortv

## Install

Buy a Yeelight:

https://amzn.to/3uCANyr 

(this uses amazon referee links, let me get some money at least with this XD)

Add the plugin:

```
npm install jest-plugin-yeelight
```

Add the plugin in your jest.config.js file, with the IP of your yeelight.

```javascript
module.exports = {
  ...
  watchPlugins: [ [ 'jest-plugin-yeelight', { ip: '192.168.1.56'} ]] ,
  ...
}
```

Now, when you run your tests in "watch" mode, the plugin is evaluated and your
smart light will change color based on the tests results. You need to execute your jest
tests in watch mode. For example, if you use vue-cli-service with jest: 

```
vue-cli-service test:unit --watch
```

For this to work, you need to use "miio" to get the IP address and save the security token in memory.

```
npx miio discovery
npx miio inspect (IPADDRESS)
npx miio tokens update (IPADDRESS) --token (YOUR_TOKEN)
```
More information: https://github.com/aholstenson/miio#readme

You can use this to get the token of your yeelight:

https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor

In order to be able to publish your repo in Github, without others requiring to have a Yeelight, 
you might want to do something like this in your jest.config.js:

```javascript
const isYeelightInstalled = () => {
  try {
    require.resolve("jest-plugin-yeelight");
    console.log("jest-plugin-yeelight is installed. Yeelight will change per every test result :) .");
    return true;
  } catch(e) {
    console.log("jest-plugin-yeelight not installed. Yeelight will not change based on test results :( .");
    return false;
  }
};

module.exports = {
  ...
  watchPlugins: isYeelightInstalled() ? [ [ 'jest-plugin-yeelight', { ip: '192.168.1.56'} ]] : [],
}
```

## License

Please, if you use this in your streamings, it would be very kind of you
to give me some credit, and tell your users you got this from https://twitch.tv/itortv

### ISC License

Copyright (c) 2021, Jordi Martí

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
