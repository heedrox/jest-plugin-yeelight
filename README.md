# Jest Plugin Yeelight

A Jest plugin to change Yeelight Smart Light colors based on test results. When tests pass, your light is green.
When tests are failing, your light is red.

It's a great complement to your twitch or youtube streamings. Please, if you use this in your streamings,
it would be lovely if you gave me some credit, at least, once in a while.

Yeelight is the most common Xiaomi MI smart light.

## Install

Buy a Yeelight:

https://amzn.to/3uCANyr 

(this uses amazon referee links, let me get some money at least with this XD)

Add the plugin:

```
npm install jest-plugin-yeelight
```

Add the plugin in your jest.config.js file, with the IP of your yeelight.

```
watchPlugins: [ [ 'jest-plugin-yeelight', { ip: '192.168.1.56'} ]] ,
```

For this to work, you can use "miio" to get the IP address and save the security token in memory.


```
npx miio discovery
npx miio inspect (IPADDRESS)
npx miio tokens update (IPADDRESS) --token (YOUR_TOKEN)
```
https://github.com/aholstenson/miio#readme

You can use this to get the token of your yeelight:

https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor

In order to be able to publish your repo in Github, without others requiring to have a Yeelight, 
you might want to do something like this in your jest.config.js:

```
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
