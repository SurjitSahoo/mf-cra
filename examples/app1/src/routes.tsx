import { Routes, Route, Link } from 'react-router-dom';
import image from 'assets/images/image.jpg';
import 'index.css';

export default function AppRoutes() {
  return (
    <div className='bg-pink-300'>
      <div className='text-3xl text-pink-900'>App 1</div>

      <Link to='route1' className='text-blue-600 mr-4'>
        link 1
      </Link>
      <Link to='route2' className='text-blue-600'>
        link 2
      </Link>
      <img src={image} alt='my pic' className='max-h-80' />
      <div className='my-10 text-green-700' style={{ color: 'red' }}>
        <Routes>
          {/* TODO: Check with images and other assets */}
          <Route index element={<div>App 1 Home</div>} />
          <Route path='/route1' element={<div>App 1 Route 1</div>} />
          <Route path='/route2' element={<div>App 1 Route 2</div>} />
        </Routes>
      </div>
    </div>
  );
}
