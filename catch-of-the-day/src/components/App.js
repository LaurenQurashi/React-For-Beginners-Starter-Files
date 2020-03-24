import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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
    // The code below is loading a bunch of sample fishes into our state. The call above and below do the same thing, however if your variables you wanna map
    // are called the same thing, you can use short hand coding (above) to call it. If not, you can use the long hand coding (below).
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Fish Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
                {/* In order to get the add fish method to the AddFishForm component, we pass it down in the inventory props.  */}
            </div>
        )
    }

}

export default App; 