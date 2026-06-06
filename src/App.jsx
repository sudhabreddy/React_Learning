import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./components/header"; 
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"; 
import Error from "./components/Error";
import ExampleClassComponent from "./components/ExampleClassComponent";
import ExampleFunctionalComponent from "./components/ExampleFunctionalComponent";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { useState,useEffect} from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=>{
    
const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: ""
});

useEffect(()=>{
    // Simulate fetching user data from an API
     setLoggedInUser({
            name: "John Doe",
            email: "sudha.mettu@gmail.com"
        });
},[]);

    return(
    <Provider store={appStore}>
    <div>       
        <Heading></Heading>
        <UserContext.Provider value={{ loggedInUser }}>
        <Outlet></Outlet>
        </UserContext.Provider>
    </div>  
    </Provider>
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
            { path: "/example", element: <ExampleClassComponent   /> , errorElement: <Error />},
            {path: "/exampleFunc", element: <ExampleFunctionalComponent   /> , errorElement: <Error />},
            {path: "/grocery", element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense> , errorElement: <Error />}
        ]
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);