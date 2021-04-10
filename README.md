# Jest Plugin Yeelight

A Jest plugin to change Yeelight colors based on test results.

Yeelight is the Xiaomi MI smart light.

## Install

Add the plugin:

```
npm install jest-plugin-yeelight
```

Add the plugin in your jest.config.js file, with the IP of your yeelight.

```
watchPlugins: [ [ 'jest-plugin-yeelight', { ip: '192.168.1.56'} ]] ,
```

You can use "miio" to get the IP address and save the security token in memory.

```
npx miio discovery
npx miio inspect (IPADDRESS)
npx miio tokens update (IPADDRESS) --token (YOUR_TOKEN)
```
https://github.com/aholstenson/miio#readme

You can use this to get the token of your yeelight:

https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor
