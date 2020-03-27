import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    // As this is a proper react component, we can just add in the proptypes object up here. 
    // The static means that every instance of the fish class will have these proptypes. We won't need to re list them. 

    static propTypes = { 
        // Shape is used when you need a particular object passed, not just any object.
        // Shape checks that the object has all these properties and types in them.
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string, 
            price: PropTypes.number,
        }),
        order: PropTypes.func
    }
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        const { image, name, price, desc, status} = this.props.details;
        // this is using Destructuring to assign the values to these variable names. 
        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}</h3>
                <span className="price">{formatPrice(price)}</span>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
            </li>    
        )
    }
}

export default Fish; 