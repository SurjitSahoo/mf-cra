import { ComponentType } from 'react';
import { LoadComponentOptions } from './types';

export default function loadComponent({ remoteName, moduleToLoad }: LoadComponentOptions) {
  return async () => {
    // @ts-ignore
    const container = window[remoteName];
    const factory = await container.get(moduleToLoad);
    const Module = factory();
    return Module as { default: ComponentType<any> };
  };
}
