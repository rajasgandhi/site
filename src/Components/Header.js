import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
    render() {
        return (
            <header id="header" style={{"height": "100vh"}}>
                        <span className="logo" ><img style={{"marginTop" : "20vh"}} src={logo} alt="Logo" width="900px"/></span>

						<h1 style={{"marginTop" : "5vh"}}>I am
                        <span className="txt-rotate" data-period="500" data-rotate='[ " just a kid.", " a developer.", " a creator.", " a tinkerer.", " a maker." ]'></span>
                        </h1>
						<div style={{"borderBottom" : "none"}} className="arrow bounce"><a style={{"borderBottom" : "none"}} className="fa fa-arrow-down fa-3x" href="#intro"></a></div>


			</header>
        );
    }
}

export default Header;