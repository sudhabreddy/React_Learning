import { CDN_LOGO_URL } from "../utils/constants/";
import { Link } from "react-router-dom";

const Heading = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={CDN_LOGO_URL} alt="logo" />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart </li>
                    <li><Link to="/example">Example Class Component</Link></li>
                    <li><Link to="/exampleFunc">Example Functional Component</Link></li>
                    <li><Link to="/grocery">Grocery List</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;