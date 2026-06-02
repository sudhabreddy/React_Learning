import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./components/header"; 
import Body from "./components/Body";




const AppLayout = ()=>{
    return(
    <div>
         <Heading></Heading>
        <Body> </Body>
    </div>  
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);