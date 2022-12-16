import { LazyExoticComponent, ComponentType } from 'react';
import { IFederatedComponent } from './types';
type LazyComponent = LazyExoticComponent<ComponentType<any>>;
export default function useFederatedComponent({ remoteName, remoteUrl, moduleToLoad, shareScope }: IFederatedComponent): {
    isError: boolean;
    Component: LazyComponent | null;
};
export {};
