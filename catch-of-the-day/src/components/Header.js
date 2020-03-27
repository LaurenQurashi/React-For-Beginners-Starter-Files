import React from "react";
import PropTypes from "prop-types";


const Header = props => (
    <header className="top">
                <h1>
                    Catch 
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{props.tagline}</span>
                </h3> 
            </header> 

);

Header.propTypes = {
    tagline: PropTypes.string.isRequired

}
// This object is for dictating the type your prop should be. It's good practice to do this. 
// It gives you a clear and concise warning in the console if the wrong prop type is passed.
// will only appear in dev mode though. 
// As this is a stateless component, we add the header propytpes object after the header function. 

export default Header; 

// Here you can have a stateless Component. If your component just renders HTML and gets fed in data, there
// is no need for it to be a full blown component. We have made header into a stateless component by making it a 
// function with an arrow statement and an implicit return.