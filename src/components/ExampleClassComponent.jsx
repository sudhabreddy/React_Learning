import React from "react";
import  UserContext from "../utils/UserContext";

class ExampleClassComponent extends React.Component {
    
    // The constructor is called when the component is created. It is used to initialize state 
    // and bind methods.
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    // This method is called immediately after the component is mounted (inserted into the DOM)
    componentDidMount() {
        console.log("Component Mounted");
    }

    // This method is called after the component updates (after state or props change)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Component Updated");
        }
    }

    // This method is called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        return (
            <div>

                <h1>Count: {this.state.count}</h1>
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <div>
                            <p>User: {loggedInUser.name}</p>
                        </div>
                    )}
                </UserContext.Consumer>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default ExampleClassComponent;