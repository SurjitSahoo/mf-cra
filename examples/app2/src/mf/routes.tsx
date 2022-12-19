import { Routes, Route, Link } from 'react-router-dom';
import 'index.css';

import { StoreProvider, useCount as useLocalCount } from 'reduxStore';

// @ts-ignore
import { useCount } from 'centralRedux/store';

export default function AppRoutes() {
  const { count, increment, decrement, clear } = useCount();

  return (
    <div className='bg-green-200'>
      <div className='text-3xl text-yellow-800'>App 2</div>

      <div className='bg-cyan-400 rounded mx-1 p-2 my-1 text-purple-700 text-2xl '>
        <div className='ml-8 text-purple-600'>Centralized Redux stuff</div>
        <div className='ml-10 font-semibold'>Central Count: {count}</div>
        <button onClick={increment} className='bg-green-700 text-white px-2 rounded'>
          increment
        </button>
        <button onClick={decrement} className='bg-amber-400 text-white px-2 rounded mx-2'>
          decrement
        </button>
        <button onClick={clear} className='bg-slate-400 text-white px-2 rounded'>
          clear
        </button>
      </div>

      <StoreProvider>
        <LocalReduxStuff />
      </StoreProvider>

      <Link to='route1' className='text-blue-600 mr-4'>
        link 1
      </Link>
      <Link to='route2' className='text-blue-600'>
        link 2
      </Link>
      <div className='my-10 text-yellow-700'>
        <Routes>
          <Route path='' element={<div>App 2 Home</div>} />
          <Route path='route1' element={<div>App 2 Route 1</div>} />
          <Route path='route2' element={<div>App 2 Route 2</div>} />
        </Routes>
      </div>
    </div>
  );
}

function LocalReduxStuff() {
  const localCount = useLocalCount();

  return (
    <div className='bg-teal-400 rounded mx-1 p-2 my-1 text-purple-700 text-2xl '>
      <div className='ml-8 text-purple-600'>Local Redux stuff</div>
      <div className='ml-10 font-semibold'>Local Count: {localCount.count}</div>
      <button onClick={localCount.increment} className='bg-green-700 text-white px-2 rounded'>
        increment
      </button>
      <button onClick={localCount.decrement} className='bg-amber-400 text-white px-2 rounded mx-2'>
        decrement
      </button>
      <button onClick={localCount.clear} className='bg-slate-400 text-white px-2 rounded'>
        clear
      </button>
    </div>
  );
}
