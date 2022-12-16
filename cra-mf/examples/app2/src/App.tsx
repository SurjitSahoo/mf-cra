import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div className='mb-10 flex'>
          <div>
            <div>Name: App2 CRA</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <div>CSS: Tailwind</div>
          </div>
        </div>

        <div className='mt-10'>
          <BrowserRouter>
            <Routes>
              <Route path='/test' element={<div>test route</div>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
