import React, { Component } from 'react';
import me from '../images/me.png'
class Main extends Component {
    render() {
        return(
            <div id="main">
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>About Me</h2>
										</header>
										<p>I am a student in Aurora Illinois, interested in computer science and using it to help better the world. You can find out more about what I have done below.</p>

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
										<span className="icon major style5 fa-bus"></span>
										<h3>Bytecurve</h3>
										<p>I have helped the company, <a href="https://bytecurve.com" target="top">Bytecurve</a>, with developing their app for school bus drivers. Bytecurve is the company that manages the bussing system of one of the biggest school districts in Illinois, USA.</p>
									</li>
									<li>
										<span className="icon major style5 fa-code"></span>
										<h3>Hackathon</h3>
										<p>I attended a hackathon, <a href="https://windyhacks.com" target="top">Windy City Hacks</a>, in 2019. At this hackathon, although I didn't win anything, I learned many valuable lessons from many industry-leading experts that I have used in other projects of mine.</p>
									</li>
									<li>
										<span className="icon major style5 fa-dsf"></span>
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
									<button><a style={{"borderBottom" : "none"}} href="/contact">Contact Me</a></button>
								</header>
							</section>

					</div>
        );
    }
}

export default Main;