import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
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