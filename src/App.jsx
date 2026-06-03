import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./components/header"; 
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"; 
import Error from "./components/Error";
import ExampleClassComponent from "./components/ExampleClassComponent";

const AppLayout = ()=>{
    return(
    <div>
        <Heading></Heading>
        <Outlet></Outlet>
    </div>  
    );
};

const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <AppLayout />,
        errorElement: <Error /> ,
        children: [
            {path: "/", element: <Body /> , errorElement: <Error />},
            { path: "/about", element: <AboutUs /> , errorElement: <Error />},
            { path: "/contact", element: <ContactUs /> , errorElement: <Error />},
            { path: "/example", element: <ExampleClassComponent   /> , errorElement: <Error />}
        ]
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);