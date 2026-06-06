
import { useState, useEffect } from "react";
import RestaurantCard, {PromotedRestaurantCard} from "./RestuarantCard";
import RestaurantMenu from "./RestaurantMenu";

const Body = () => {

       useEffect(() => {
        console.log("Body Component Mounted");
    }, []);


const restaurantList = [
    {
        id:1,
        name: "Pizza Hut",  
        cuisines: ["Pizza", "Italian"],
        promoted: true,
    },
    {
        id:2,
        name: "Burger King",
        cuisines: ["Burger", "Fast Food"],
    },
    {
        id:3,
        name: "Sushi World",
        cuisines: ["Sushi", "Japanese"],
        promoted: false,
    },
    {   
        id:4,
        name: "Taco Bell",
        cuisines: ["Tacos", "Mexican"],
        proomoted: false,
    },
    {
        id:5,
        name: "Pasta Palace",
        cuisines: ["Pasta", "Italian"],
        promoted: true,
    },
];

const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(() => {
    setListOfRestaurants(restaurantList);
}, []);

useEffect(() => {
    setSearchText("");
}, []);


const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
        setListOfRestaurants(restaurantList);
    }
};

const onSearch = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) =>   
        restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredRestaurants);
};

    return (
           
        <div className="body">
            <input type="text" placeholder="Search" 
            value={searchText} 
            onChange={onSearchChange} />
            <button onClick={onSearch}>Search</button>
            { listOfRestaurants.map((restaurant) => (
                restaurant.promoted ? (
                    <PromotedRestaurantCard key={restaurant.id} restaurant={restaurant} />
                ) : (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                )
            ))}
            
        </div>
    ); 
};

export default Body;