import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllPost from "../pages/AllPost";
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import PostEdit from "../pages/PostEdit";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:([
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/posts',
                loader:()=>fetch('http://localhost:5000/news'),
                element:<AllPost/>
            },
            {
                path:'/post/create',
                element:<CreatePost/>
            },
            {
                path:'/post/edit',
                element:<PostEdit/>
            }
        ])
    }
])