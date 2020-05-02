import React from 'react'
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function Home() {
    return(
        <div>
			<div id="wrapper">
				<Header />
				<Nav />
				<Main />	
				<Footer />
			</div>
        </div>
    )
}

export default Home; 