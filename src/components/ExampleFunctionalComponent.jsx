import React from "react";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const ExampleFunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
   
    // This effect runs only once when the component is mounted
    useEffect(() => {
        console.log("Component Mounted");
    }, []);
    
    useEffect(() => {
        console.log("Component Updated");
    }, [count]);

    // This function is called when the component is unmounted (removed from the DOM)
    useEffect(() => {
        return () => {
            console.log("Component Will Unmount");
        };
    }, []);

    const handleClick = () =>
    {
        dispatch(addItem("Pizza)"));
    };

     const handleRemove = () =>
    {
        dispatch(removeItem("Pizza)"));
    };


    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="p-2 m-2 border-2 rounded-lg" onClick={() => setCount(count + 1)}>Increment</button>
             <button className="p-2 m-2 border-2 rounded-lg" onClick={handleClick}>Add to Cart</button>
              <button className="p-2 m-2 border-2 rounded-lg" onClick={handleRemove}>Remove from Cart</button>
        </div>
    );
};

export default ExampleFunctionalComponent;