import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./components/header";
import { RESTAURANT_IMAGE_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines } = props.restaurant.data;
    return (
        <div className="restCard">
            <img src={RESTAURANT_IMAGE_URL} alt="food" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <RestaurantCard restaurant={{
                data: {
                    name: "Biryani By Kilo",
                    cuisines: ["Biryani", "Indian"],
                    
                }
            }} />
            
            <RestaurantCard restaurant={{
                data: {
                    name: "Pizza Hut",
                    cuisines: ["Pizza", "Fast Food"]
                }
            }} />

        </div>
    ); 
};

const AppLayout = ()=>{
    return(
    <div>
         <Heading></Heading>
        <Body />
    </div>  
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);