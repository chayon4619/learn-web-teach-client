import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Blog from "../components/Pages/Blog";
import CheckOut from "../components/Pages/CheckOut";
import Course from "../components/Pages/Course";
import DetailPage from "../components/Pages/DetailPage";
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
                element: <Course></Course>,
                loader: () => {
                    return fetch('https://learn-web-server.vercel.app/')
                }
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
            },
            {
                path: '/detailPage/:id',
                element: <DetailPage></DetailPage>,
                loader: ({ params }) => {
                    return fetch(`https://learn-web-server.vercel.app/course/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => {
                    return fetch(`https://learn-web-server.vercel.app/course/${params.id}`)
                }
            },

        ]
    }
])