import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import { createBrowserHistory } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Quizs from './Components/Quizs/Quizs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
       
        {
          path: '/',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path: '/topic/:quizId',
          loader: async({params}) =>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quizs></Quizs>
        },
        {
          path:'/statistics',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
