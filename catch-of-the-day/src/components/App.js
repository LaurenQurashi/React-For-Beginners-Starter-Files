import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        // Take a copy of the fishes state as we don't want to directly manipulate it. 
        const fishes = {...this.state.fishes};
        // Add our new fish to that fishes list.
        fishes[`fish${Date.now()}`] = fish;
        // Set the new fishes object to state.
        this.setState({fishes});
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Fish Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
                {/* In order to get the add fish method to the AddFishForm component, we pass it down in the inventory props.  */}
            </div>
        )
    }

}

export default App; 