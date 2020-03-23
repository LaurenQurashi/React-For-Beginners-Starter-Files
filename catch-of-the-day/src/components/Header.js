import React from "react";

class Header extends React.Component {
    render() {
        return (
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
                    <span>{this.props.tagline}</span>
                    {/* This is how you display a prop in react */}
                </h3> 
            </header>     
        )
    }
}

export default Header; 