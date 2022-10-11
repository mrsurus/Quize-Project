import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import { createBrowserHistory } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Quizs from './Components/Quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
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
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
