import {createBrowserRouter} from "react-router"
import MainLayout from "../Layout/MainLayout"
import Error from "../Pages/Error"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Listing from "../Pages/Listing"
import ListingDetails from "../Pages/ListingDetails"
import MyListing from "../Pages/MyListing"
import About from "../Pages/About"
import EditListing from "../Pages/EditListing"
import AddListing from "../Pages/AddListing"
import Profile from "../Pages/Profile"
import PrivateRoute from "./PrivateRoute"


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
            },
            {
                path : 'listing',
                element: <Listing />
            },
            {
                path : 'listing/details/:id',
                element: <PrivateRoute>
                     <ListingDetails />
                </PrivateRoute>
               
            }
            ,
            {
                path : 'my-listing/',
                element: 
                <PrivateRoute>
                     <MyListing />
                </PrivateRoute>
                
            },
            {
                path : 'about',
                element: <About />
            },
            {
                path : 'my-listing/edit/:id',
                element: 
                <PrivateRoute>
                     <EditListing />
                </PrivateRoute>
               
            },
            {
                path : 'add-listing',
                element:
                <PrivateRoute>
                <AddListing />
           </PrivateRoute>
                 
            },
            {
                path : 'profile',
                element: 
                <PrivateRoute>
                  <Profile />
           </PrivateRoute>
             
            }
        ]
    }
])