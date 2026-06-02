
import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines = [] } = restaurant;
    
    return (
        <div className="restCard">
            <img src={RESTAURANT_IMAGE_URL} alt="food" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    );
};

export default RestaurantCard;