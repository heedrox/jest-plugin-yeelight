const changeColorTest = require('./change-color-test');

class YeelightWatchPlugin {
  constructor({config}) {
    console.log('initialized plugin', config);
    this.ip = config.ip;
  }
  apply(jestHooks) {
    jestHooks.onTestRunComplete(results => {
      changeColorTest(this.ip, !results.success);
    });
  }
}

module.exports = YeelightWatchPlugin;
