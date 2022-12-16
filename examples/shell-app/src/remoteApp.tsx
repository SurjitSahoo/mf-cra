import { Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFederatedComponent, IFederatedComponent } from 'cra-mf';
import remoteApps from './remoteApps.json';

interface Props {
  app: IFederatedComponent;
}

function RemoteApp({ app }: Props) {
  const { Component: RemoteComponent } = useFederatedComponent(app);
  // const { Component: Hello } = useFederatedComponent({ ...app, moduleToImport: './hello' });

  return (
    <div className='mx-2 my-3 ring-2 ring-yellow-400 p-2'>
      <Suspense fallback='loading...'>
        {/* {Hello && <Hello />} */}
        {RemoteComponent && <RemoteComponent />}
      </Suspense>
    </div>
  );
}

export default function RemoteAppContainer() {
  const { remoteApp } = useParams();
  const appToLoad = useMemo(() => remoteApps.find(app => app.localRoute === remoteApp), [remoteApp]);

  if (!appToLoad) return <div>App not found</div>;

  return <RemoteApp app={appToLoad} />;
}
