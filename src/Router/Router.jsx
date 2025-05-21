import {createBrowserRouter} from "react-router"
import MainLayout from "../Layout/MainLayout"
import Error from "../Pages/Error"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true ,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path : 'register',
                element: <Register />
            }
        ]
    }
])