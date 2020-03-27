import React from "react";
import PropTypes from "prop-types";


class EditFishForm extends React.Component {

    static propTypes = {
        index: PropTypes.string,
        fish: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
        }),
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func
    }

    handleChange = event => {
        // Update the fish
        const updatedFish = {
            //take a copy of the current fish
            ...this.props.fish, 
            // overwrite the one thing that got changed. 
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };
    render () {
        return <div className="fish-edit">
            <input 
                type="text" 
                name="name" 
                onChange={this.handleChange} 
                value={this.props.fish.name} 
            /> 
            <input 
                type="text" 
                name="price" 
                onChange={this.handleChange} 
                value={this.props.fish.price}
            />
            <select 
                name="status" 
                onChange={this.handleChange} 
                value={this.props.fish.status}
            >
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea 
                name="desc" 
                onChange={this.handleChange} 
                value={this.props.fish.desc}
            />
            <input 
                type="text" 
                name="image" 
                onChange={this.handleChange} 
                value={this.props.fish.image}
            />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    };
};

export default EditFishForm;