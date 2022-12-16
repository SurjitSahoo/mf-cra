var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { lazy, useEffect, useState } from 'react';
import loadComponent from './componentLoaderFromWebpackContainer';
import { getOrLoadRemote } from './getOrLoadRemote';
export default function useFederatedComponent({ remoteName, remoteUrl, moduleToLoad, shareScope = 'default' }) {
    const key = `${remoteUrl}-${remoteName}-${shareScope}-${moduleToLoad}`;
    const [Component, setComponent] = useState(null);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        if (Component)
            setComponent(null);
    }, [key]);
    useEffect(() => {
        function loadComp() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield getOrLoadRemote({ remoteName, remoteUrl, shareScope });
                    const Comp = lazy(loadComponent({ remoteName, moduleToLoad }));
                    setComponent(Comp);
                    setIsError(false);
                }
                catch (err) {
                    console.error(err);
                    setIsError(true);
                }
            });
        }
        if (!Component) {
            loadComp();
        }
    }, [key, Component]);
    return { isError, Component };
}
