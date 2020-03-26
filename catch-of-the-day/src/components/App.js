import React from "react";
import base from "../base";
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

    componentDidMount() {
        // this ref is different to the input refs, it's refering to the piece of data in the database.
        // The props.match... is accessing the storeId from the router. this is because the router is the parent component for App. 
        // The /fishes is because in firebase we are connecting to the db for the store, and then accessing the fishes object under it.
        // the sync state also requires an object with some options. 
        const {params} = this.props.match
        // First we have to reinstate the local storage. 
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)})
            // This sets the state of the local storage ref if there is one. JSON.parse turns it back into an object after we turned it to a string below.
            // Mounting triggers an update hence why the local storage is in string form. 
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    // This makes sure that you don't have any memory leaks, and once the component has unmounted, you stop accessing that database. 

    addFish = (fish) => {
        // Take a copy of the fishes state as we don't want to directly manipulate it. 
        const fishes = {...this.state.fishes};
        // Add our new fish to that fishes list.
        fishes[`fish${Date.now()}`] = fish;
        // Set the new fishes object to state.
        this.setState({fishes});
    };

    updateFish = (key, updatedFish) => {
        // take a copy of the current state
        const fishes = {...this.state.fishes};
        // update that state
        fishes[key] = updatedFish;
        // set that to state
        this.setState({fishes})

    };

    // The code below is loading a bunch of sample fishes into our state. The call above and below do the same thing, however if your variables you wanna map
    // are called the same thing, you can use short hand coding (above) to call it. If not, you can use the long hand coding (below).
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }

    addToOrder = key => {
        // Take a copy of the order state as we don't want to directlyt manipulate it. 
        const order = {...this.state.order};
        // Either add the fish to the order or incremement it's quantity. 
        order[key] = order[key] +1 || 1;
        // Set the state. 
        this.setState({order});
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Fish Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
                {/* In order to get the add fish method to the AddFishForm component, we pass it down in the inventory props.  */}
            </div>
        )
    }

}

export default App; 