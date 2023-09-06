import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import Layout from '@/layout';
import ThreeDemo1 from '@/pages/three-demo-1';
import ThreeDemo2 from '@/pages/three-demo-2';
import ThreeDemo3 from '@/pages/three-demo-3';
import ThreeDemo4 from '@/pages/three-demo-4';
import ThreeDemo5 from '@/pages/three-demo-5';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'three-demo-1',
        element: <ThreeDemo1 />,
      },
      {
        path: 'three-demo-2',
        element: <ThreeDemo2 />,
      },
      {
        path: 'three-demo-3',
        element: <ThreeDemo3 />,
      },
      {
        path: 'three-demo-4',
        element: <ThreeDemo4 />,
      },
      {
        path: 'three-demo-5',
        element: <ThreeDemo5 />,
      },
    ],
  },
]);

export default router;
