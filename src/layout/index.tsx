import { Outlet } from 'react-router-dom';
import './index.css';

export default function Layout() {
  return (
    <div className='wrap'>
      <main className='main-container'>
        <aside className='sidebar fadeout'></aside>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
