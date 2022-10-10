import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
