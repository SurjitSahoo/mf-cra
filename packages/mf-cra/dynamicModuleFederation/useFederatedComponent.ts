import { lazy, LazyExoticComponent, useEffect, useState, ComponentType } from 'react';
import loadComponent from './componentLoaderFromWebpackContainer';
import { getOrLoadRemote } from './getOrLoadRemote';
import { IFederatedComponent } from './types';

type LazyComponent = LazyExoticComponent<ComponentType<any>>;

export default function useFederatedComponent({ remoteName, remoteUrl, moduleToLoad, shareScope = 'default' }: IFederatedComponent) {
  const key = `${remoteUrl}-${remoteName}-${shareScope}-${moduleToLoad}`;

  const [Component, setComponent] = useState<LazyComponent | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (Component) setComponent(null);
  }, [key]);

  useEffect(() => {
    async function loadComp() {
      try {
        await getOrLoadRemote({ remoteName, remoteUrl, shareScope });
        const Comp = lazy(loadComponent({ remoteName, moduleToLoad }));
        setComponent(Comp);
        setIsError(false);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    }
    if (!Component) {
      loadComp();
    }
  }, [key, Component]);

  return { isError, Component };
}
