interface Common {
  /**
   * name of the federated remote app
   */
  remoteName: string;
}

export interface LoadRemoteOptions extends Common {
  remoteUrl?: string;
  shareScope?: string;
}

export interface LoadComponentOptions extends Common {
  moduleToLoad: string;
}

export type IFederatedComponent = LoadRemoteOptions & LoadComponentOptions;
