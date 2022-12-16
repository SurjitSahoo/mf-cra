var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getOrLoadRemote = ({ remoteName, shareScope, remoteUrl: remoteFallbackUrl }) => {
    return new Promise((resolve, reject) => {
        // check if remote exists on window
        // @ts-ignore
        if (!window[remoteName]) {
            // search dom to see if remote tag exists, but might still be loading (async)
            const existingRemote = document.querySelector(`[data-webpack="${remoteName}"]`);
            // when remote is loaded..
            // @ts-ignore
            const onload = originOnload => () => __awaiter(void 0, void 0, void 0, function* () {
                // check if it was initialized
                // @ts-ignore
                if (!window[remoteName].__initialized) {
                    // if share scope doesn't exist (like in webpack 4) then expect shareScope to be a manual object
                    // @ts-ignore
                    if (typeof __webpack_share_scopes__ === 'undefined') {
                        // use default share scope object passed in manually
                        // @ts-ignore
                        yield window[remoteName].init(shareScope.default);
                    }
                    else {
                        // otherwise, init share scope as usual
                        // @ts-ignore
                        yield window[remoteName].init(__webpack_share_scopes__[shareScope]);
                    }
                    // mark remote as initialized
                    // @ts-ignore
                    window[remoteName].__initialized = true;
                }
                // resolve promise so marking remote as loaded
                resolve();
                originOnload && originOnload();
            });
            if (existingRemote) {
                // if existing remote but not loaded, hook into its onload and wait for it to be ready
                existingRemote.onload = onload(existingRemote.onload);
                existingRemote.onerror = reject;
                // check if remote fallback exists as param passed to function
                // TODO: should scan public config for a matching key if no override exists
            }
            else if (remoteFallbackUrl) {
                // inject remote if a fallback exists and call the same onload function
                var d = document, script = d.createElement('script');
                script.type = 'text/javascript';
                // mark as data-webpack so runtime can track it internally
                script.setAttribute('data-webpack', `${remoteName}`);
                script.async = true;
                script.onerror = reject;
                script.onload = onload(null);
                script.src = remoteFallbackUrl;
                d.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                // no remote and no fallback exist, reject
                reject(`Cannot Find Remote ${remoteName} to inject`);
            }
        }
        else {
            // remote already instantiated, resolve
            resolve();
        }
    });
};
