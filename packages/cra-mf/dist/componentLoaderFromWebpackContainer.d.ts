import { ComponentType } from 'react';
import { LoadComponentOptions } from './types';
export default function loadComponent({ remoteName, moduleToLoad }: LoadComponentOptions): () => Promise<{
    default: ComponentType<any>;
}>;
