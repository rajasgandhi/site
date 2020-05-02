import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav id="nav">
						<ul>
							<li><a href="#intro" className="active">Introduction</a></li>
							<li><a href="#mywork">My Work</a></li>
							<li><a href="#myskills">My Skills</a></li>
							<li><a href="#contact">Contact Me</a></li>
						</ul>
					</nav>
            </div>
        )
    }
}

export default Nav;