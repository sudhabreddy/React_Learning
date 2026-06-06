import {createContext} from "react";

const UserContext = createContext({
    loggedInUser: {
        name: "Sudha",
        email: "sudha.mbreddy@gmail.com",
    }
});

export default UserContext;