import { Routes, Route, Link } from 'react-router-dom';
import image from 'assets/images/image.jpg';
import 'index.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import * as reduxStore from 'centralRedux/store';

export default function AppRoutes() {
  // const { count, increment, decrement, clear } = useCount();

  return (
    <div className='bg-pink-300'>
      <div className='text-3xl text-pink-900'>Vite React App 2</div>

      {/* <div className='bg-pink-200 rounded mx-1 p-2 my-1 text-purple-700 text-2xl '>
        <div className='ml-8 text-purple-600'>Centralized Redux stuff</div>
        <div className='ml-10 font-semibold'>Count: {count}</div>
        <button onClick={increment} className='bg-green-700 text-white px-2 rounded'>
          increment
        </button>
        <button onClick={decrement} className='bg-green-400 text-slate-500 px-2 rounded mx-2'>
          decrement
        </button>
        <button onClick={clear} className='bg-slate-400 text-white px-2 rounded'>
          clear
        </button>
      </div> */}

      <Link to='route1' className='text-blue-600 mr-4'>
        link 1
      </Link>
      <Link to='route2' className='text-blue-600'>
        link 2
      </Link>
      <img src={image} alt='my pic' className='max-h-80' />
      <div className='my-10 text-green-700' style={{ color: 'red' }}>
        <Routes>
          <Route index element={<div>App 1 Home</div>} />
          <Route path='/route1' element={<div>App 1 Route 1</div>} />
          <Route path='/route2' element={<div>App 1 Route 2</div>} />
        </Routes>
      </div>
    </div>
  );
}
