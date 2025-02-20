import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News from "../Pages/News/News";
import PrivateRoute from "../Private/PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/news.json")
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
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
    },
]);

export default router;