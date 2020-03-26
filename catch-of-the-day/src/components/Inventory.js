import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";


class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h3>Inventory</h3>
                {Object.keys(this.props.fishes).map( key => 
                    <EditFishForm 
                        key={key} 
                        index={key}
                        fish={this.props.fishes[key]} 
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                )}
                <AddFishForm 
                    addFish={this.props.addFish} 
                />
                <button onClick={this.props.loadSampleFishes}> Load Sample Fishes </button>
            </div> 
            // In order to get the addFish function to the AddFishForm component, we pass it down via props.    
        )
    }
}

export default Inventory; 