import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Suspense } from 'react';

const root = document.getElementById('root');

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
	children: [
		{
			path: '/about',
			element: <Suspense fallback="Loading..."><About /></Suspense>
		},
		{
			path: '/shop',
			element: <Suspense fallback="Loading..."><Shop /></Suspense>
		}
	]
  },
]);

container.render(<RouterProvider router={router} />);
