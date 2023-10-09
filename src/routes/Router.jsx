import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: "event-details/:id",
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
])

export default router;