const miio = require('miio');

const TESTS_IN_GREEN = '#00ff00';
const TESTS_IN_RED = '#ff0000';

const setColor = async (ip, color) => {
  const device = await miio.device({ address: ip });
  await device.color(color)
  device.destroy();
};

const changeColorTest = async (ip, areTestsFailing) =>
  await setColor(ip, areTestsFailing ? TESTS_IN_RED : TESTS_IN_GREEN);

module.exports = changeColorTest;
// 9917059051b33f56fde75edff3e3ff6b
