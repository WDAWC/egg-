/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662995354876_8066';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
 // 连接mongodb的配置
 // 数据库配置
 exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/egg_article', // 你的数据库地址，egg_article是你数据库得名字
    options: {
      useNewUrlParser: true,
    },
  },
};
config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
