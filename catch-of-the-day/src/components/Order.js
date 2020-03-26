import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {  
    renderOrder = key =>{
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        // for a split second while we check local storage then go to the db if nothing exists, there are no fish available while it fetches the db data. 
        // This stops anything from rendering until the fish are loaded. 
        if(!fish) return null;
        
        if(!isAvailable) {
           return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>;
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.deleteFromOrder(key)}>X</button>
           </li>
        );
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce( (prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) { 
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0); 
        return (
            <div className="order-wrap">

                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)} 
                </ul>
                <div className="total">
                    Total: 
                    <strong>{formatPrice(total)}</strong>
                </div>
            
            </div>    
        )
    }
}

export default Order; 

// The reducer above was hard for you to understand. orderId's is a turned into an array of just the keys - ["fish1", "fish2"...] 
// the reduce method takes in 2 parameters (look closely at the brackets) a reducer, and an initial value. The initial value is set to 0. 
// The reducer is the method which is taking 2 parameters, a prevTotal and a key. For each item in orderId's, it takes the previous total and the id, 
// and feeds it in and updates it. So here, it's starting at 0, with the key of "fish1". It takes the key for the quantity (which is given in app under addToOrder)
// then it does the equasion to add the price to the accumulater. Each time round, it remembers what the accumulator (prevTotal) was on and does the whole thing again. 
