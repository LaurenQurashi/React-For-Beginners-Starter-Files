import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    // these references let you grab the values from the inputs. 

    createFish = (event) => {
        event.preventDefault();
        // creates a fish object to be saved.
        const fish = {
         name: this.nameRef.current.value,
         price: parseFloat(this.priceRef.current.value),
         // this makes the price a decimal number. 
         status: this.statusRef.current.value,
         desc: this.descRef.current.value,
         image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        // This addFish function lives in app and manipulates the state. We have passed it down from component to component. 

        event.currentTarget.reset();
        // this resets the form after you've submitted. Current target is the form. 
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef}  type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef}  placeholder="Desc" />
                <input name="image" ref={this.imageRef}  type="text" placeholder="Image" />
                <button type="submit"> + Add Fish </button>
            </form>   
        )
    }
}

export default AddFishForm; 