import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RemoteApp from './remoteApp';
import remoteApps from './remoteApps.json';

function App() {
  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div className='mb-10 flex'>
          <div>
            <div>Name: Shell App CRA</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <div>CSS: Tailwind</div>
          </div>
        </div>

        <div className='mt-10'>
          <BrowserRouter>
            {remoteApps.map(app => (
              <Link key={app.remoteName + app.moduleToLoad} to={app.localRoute} className='bg-green-600 px-4 py-2 rounded text-white mr-4'>
                load {app.remoteName}
              </Link>
            ))}
            <Routes>
              <Route path='/test' element={<div>test route</div>} />
              <Route path='/:remoteApp/*' element={<RemoteApp />} />
              <Route path='*' element={<div>Remote App not found</div>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
