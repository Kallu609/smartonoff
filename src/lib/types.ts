export interface ISaveData {
  relayID: number;
  settingID: string;
  values: {
    [key: string]: number | string;
  };
}

export interface ITestData {
  relayID: number;
}

export interface ISettings {
  [relayID: string]: {
    [settingID: string]: {
      [value: string]: number | string;
    };
  };
}
