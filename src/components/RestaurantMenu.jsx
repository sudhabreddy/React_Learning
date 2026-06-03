import {useEffect} from "react";

const RestaurantMenu = () => {

    useEffect(
        ()=> {
            fectMenu();
        },[]
    );

    const fectMenu = async () => {
        const data =
        fetch("https://corsproxy.io/?url=" + encodeURIComponent("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"));
        const json = await data.json();
        console.log(json);
    }

    return (
        <div>
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Pasta</li>
                <li>Salad</li>
            </ul>   
        </div>
    );
};

export default RestaurantMenu;