import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = <DefaultConfig> {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577933753169_3689';

  // add your config here
  config.middleware = [
  ];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/local',
      options: {}
    },
  };

  return config;
};
