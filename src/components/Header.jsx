import { CDN_LOGO_URL } from "../utils/constants/";
import { Link } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Heading = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-100">
            <div className="logoContainer">
                <img src={CDN_LOGO_URL} alt="logo" className="w-56" />
            </div>
            <div className="navItems ">
                <ul className="flex p-4 m-4 justify-center gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart </li>
                    <li><Link to="/example">Example Class Component</Link></li>
                    <li><Link to="/exampleFunc">Example Functional Component</Link></li>
                    <li><Link to="/grocery">Grocery List</Link></li>
                    <li> <Link>
                    Cart Items { cartItems.length }
                    </Link></li>
                </ul>
            </div>
            <div className="userInfo">
                <span>{loggedInUser?.name || "Guest"}</span>
            </div>
        </div>
    );
};

export default Heading;