import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Blog from "../components/Pages/Blog";
import Course from "../components/Pages/Course";
import Faq from "../components/Pages/Faq";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])