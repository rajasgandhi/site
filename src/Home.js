import React from 'react'
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Home() {
    return(
        <div>
           
			<div id="wrapper">
				<Header />
					<nav id="nav">
						<ul>
							<li><a href="#intro" className="active">Introduction</a></li>
							<li><a href="#mywork">My Work</a></li>
							<li><a href="#myskills">My Skills</a></li>
							<li><a href="#contact">Contact Me</a></li>
						</ul>
					</nav>

				<Main />	
				<Footer />
			</div>
        </div>
    )
}

export default Home;