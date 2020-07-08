import React, { Component } from 'react';
import me from '../images/me.png'
class Main extends Component {
	constructor(props) {
		super(props);
		this._handleClick = this._handleClick.bind(this);
	}
	
	_handleClick(e) {
		e.preventDefault();
		window.location.href="/contact-me";
	}
    render() {
        return(
            <div id="main">
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2 style={{"fontFamily" : "Nunito, Source Sans Pro, sans-serif"}}>About Me</h2>
										</header>
										<p style={{"fontFamily" : "Nunito, Source Sans Pro, sans-serif"}}>I am a student in Aurora Illinois, interested in computer science and using it to help better the world. You can find out more about what I have done below.</p>

									</div>
									<span className="image"><img src={me} alt="me" /></span>
								</div>
							</section>

						
							<section id="mywork" className="main special">
								<header className="major">
									<h2>My Work</h2>
								</header>
								<ul className="features">
									<li>
										<span className="icon major style5 fa-android"></span>
										<h3>RMG Studios</h3>
										<p>I started making apps for Android. The first app I have created is TicTacToe on the Play Store. Another app that I am currently working on is called Walkware. It will alert users and stop their music if they are walking across the street so they can cross safely in a city setting.</p>
									</li>
									<li>
										<span className="icon major style5 fa-copy"></span>
										<h3>Web Developing</h3>
										<p>I have created many websites in the past and continue to make more. Some of my most notable ones are <a href="https://nsgamezz.com">NSGAMEZZ</a> and I have collaborated on <a href="https://gandhiprep.com">GandhiPrep</a>.</p>
									</li>
									<li>
										<span className="icon major style5 fa-server"></span>
										<h3>Proxy</h3>
										<p>With the world getting closer together online, sometimes we want to get away from the tracking. This <a href="https://techyx.herokuapp.com">proxy</a> allows you to do just that.</p>
									</li>
									<li>
										<span className="icon major style5 fa-link"></span>
										<h3>URL Email Scraper</h3>
										<p>I created a tool that is helpful for generating leads for marketing agencies <span>&#40;</span>or anyone, for that matter <span>&#41;</span>. This tool takes in url<span>&#40;</span>s<span>&#41;</span> and then returns a JSON-formatted list of all emails found on that url. You can check it out <a href="http://urlemailscraper.herokuapp.com">here</a>. There is also an API that is available.</p>
									</li>
									<li>
										<span className="icon major style5 fa-code"></span>
										<h3>Hackathons</h3>
										<p>I attended a hackathon, <a href="https://windyhacks.com">Windy City Hacks</a>, in 2019. At this hackathon, although I didn't win anything, I learned many valuable lessons from many industry-leading experts that I have used in other projects of mine.</p>
									</li>
									<li>
										<span className="icon major style5 fa-bar-chart"></span>
										<h3>Gradescraper</h3>
										<p>I recently made a program in python and deployed it via Flask to the web that when I login to the site, it would scrape my grades in school and display them. You can see this project <a href="https://www.gradescraper.herokuapp.com">here</a>.</p>
									</li>
								</ul>

							</section>

						
							<section id="myskills" className="main special">
								<header className="major">
									<h2>My Skills</h2>
									<p>The following statistics show my skills in various areas.</p>
								</header>


								<p style={{"marginBottom" : "6px"}}>Android Studio</p>
								<div className="container">
								  <div className="skills as">90%</div>
								</div>


								<p style={{"marginBottom" : "6px"}}>HTML</p>
								<div className="container">
								  <div className="skills html">90%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>Java</p>
								<div className="container">
								  <div className="skills java">85%</div>
								</div>

								 
								 
								<p style={{"marginBottom" : "6px"}}>JavaScript</p>
								<div className="container">
								  <div className="skills js">80%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>Python</p>
								<div className="container">
								  <div className="skills py">70%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>CSS</p>
								<div className="container">
								  <div className="skills css">65%</div>
								</div>


							</section>

						
							<section id="contact" className="main special">
								<header className="major">
									<h2>Contact Me</h2>
									<p>I am free and willing to talk to anyone about my projects, skills, etc.<br />
									Feel free to contact me if you are looking for project help and you think I could<br />
									help you. Contact info is listed below.</p>
									<p>Or press the button below.</p>
									<button onClick={this._handleClick}>Contact Me</button>
								</header>
							</section>
					</div>
        );
    }
}

export default Main;