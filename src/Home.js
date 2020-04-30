import React from 'react'
import logo from './images/logo.png'
import me from './images/me.png'
import Script from '@gumgum/react-script-tag';

function Home() {
    return(
        <div>
           
			<div id="wrapper">

				
					<header id="header" className="alt" style={{"height": "100vh"}}>
						<span className="logo"><img src={logo} alt="Logo" /></span>
						
						<h1 style={{"marginTop" : "5vh"}}>I am
  <span
     className="txt-rotate"
     data-period="500"
     data-rotate='[ "just a kid.", "a developer.", "a creator.", "a tinkerer.", "a maker." ]'></span>
</h1>
						<div style={{"borderBottom" : "none"}} className="arrow bounce"><a style={{"borderBottom" : "none"}} className="fa fa-arrow-down fa-3x" href="#intro"></a></div>


					</header>

				
					<nav id="nav">
						<ul>
							<li><a href="#intro" className="active">Introduction</a></li>
							<li><a href="#mywork">My Work</a></li>
							<li><a href="#myskills">My Skills</a></li>
							<li><a href="#contact">Contact Me</a></li>
						</ul>
					</nav>

				
					<div id="main">

						
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>About Me</h2>
										</header>
										<p>I am a student in Aurora Illinois, interested in computer science and using it to help better the world.</p>

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
									<button onclick="location.href='/contact'">Contact Me</button>
								</header>
							</section>

					</div>

					<footer id="footer">

						<section>
							<h2>Contact Info</h2>
							<dl className="alt">
								<dt>Phone</dt>
								<dd>+1 (331)-321-6129</dd>
								<dt>Email</dt>
								<dd><a href="mailto:rajasmgandhi@gmail.com">rajasmgandhi@gmail.com</a></dd>
							</dl>
							<ul className="icons">
								<li><a href="https://www.twitter.com/_rajasgandhi" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="https://www.facebook.com/rajas.gandhi.77" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
								<li><a href="https://www.instagram.com/_rajasgandhi/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="https://www.github.com/nsgamezz" className="icon fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="https://www.linkedin.com/in/rajas-gandhi-2134101a7/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
							</ul>

						</section>

					</footer>

			</div>

		
			<Script defer src="./assets/js/jquery.min.js"/>
			<Script defer src="./assets/js/jquery.scrollex.min.js"/>
			<Script defer src="./assets/js/jquery.scrolly.min.js"/>
			<Script defer src="./assets/js/browser.min.js"/>
			<Script defer src="./assets/js/breakpoints.min.js"/>
			<Script defer src="./assets/js/util.js"/>
			<Script defer src="./assets/js/main.js"/>
			<Script defer src="./assets/js/scroll.js"/>
			<Script defer src="./assets/js/typedtext.js"/>
        </div>
    
    )
}

export default Home;