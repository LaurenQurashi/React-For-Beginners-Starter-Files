import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = event => {
        // This stops the default behaviour of submitting the form and refreshing the page.
        event.preventDefault();
        // This grabs the value that have been entered into the form and puts it in a variable. 
       const storeName = this.myInput.current.value;
        // As store picker is a child of router, you can access history and push from the router. This adds the input value to the end of the url.
        this.props.history.push(`/store/${storeName}`);
    };

    // You need to write a non built in method like a prop with a function assigned to it in order to reference 'this'. 
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit" >Visit Store</button>
            </form>

        )
    }
}

export default StorePicker;