import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div>Name: CRA Redux Central Store</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div className='mb-10'>CSS: Tailwind</div>

        <BrowserRouter>
          <Routes>
            <Route path='/test' element={<div>test route</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
