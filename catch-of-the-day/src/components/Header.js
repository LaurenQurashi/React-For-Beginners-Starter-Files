import React, { Component } from "react";

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
export default Header; 

// Here you can have a stateless Component. If your component just renders HTML and gets fed in data, there
// is no need for it to be a full blown component. We have made header into a stateless component by making it a 
// function with an arrow statement and an implicit return.