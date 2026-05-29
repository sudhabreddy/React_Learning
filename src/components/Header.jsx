import {CDN_LOGO_URL} from "../utils/constants/";

const Heading = () => 
    {
        return (
            <div className="header">   
                <div className="logoContainer">
                    <img src="{CDN_LOGO_URL}" alt="logo" />
                </div>
                <div className="navItems">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart </li>
                    </ul>
                </div>
            </div>
        );
};

export default Heading;