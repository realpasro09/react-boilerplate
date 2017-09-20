export type BuildInformation = {
  frontEndBuildNumber: number,
  deploymentEnvironment: string,
};

export type SampleData: Array<any>;

export type Actions: any;

export type AppState = {
  buildInformation: BuildInformation,
  sampleData: SampleData,
  actions: Actions,
};
