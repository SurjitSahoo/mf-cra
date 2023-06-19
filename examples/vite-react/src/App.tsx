import { Suspense } from 'react';
import AppRoutes from './mf/routes';
import React from 'react';
// import Hello from 'app2/hello';
// import { useFederatedComponent } from 'mf-cra';

const Hello = React.lazy(
  // Normal way of loading things
  // import("remote_app/Button")

  // Use new loader
  () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    remotesMap['remote_app'] = {
      url: 'http://localhost:5001/assets/remoteEntry.js',
      format: 'esm',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return __federation__.ensure('remote_app').then(remote => remote.get('./Button').then(factory => factory()));
  },
);

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {/* <Hello /> */}
      <Suspense fallback='loading'>{Hello && <Hello />}</Suspense>
      <AppRoutes />
    </>
  );
}

export default App;
