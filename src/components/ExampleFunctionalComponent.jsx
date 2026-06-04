import React from "react";
import { useState, useEffect } from "react";

const ExampleFunctionalComponent = () => {
    const [count, setCount] = useState(0);

   
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

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default ExampleFunctionalComponent;