import React from 'react'

function Home() {
    return(
        <div>
           
			<div id="wrapper">

				
					<header id="header" class="alt" style={{"height": "100vh"}}>
						<span class="logo"><img src="images/logo.png" alt="Logo" /></span>
						
						<h1 style={{"marginTop" : "5vh"}}>I am
  <span
     class="txt-rotate"
     data-period="500"
     data-rotate='[ "just a kid.", "a developer.", "a creator.", "a tinkerer.", "a maker." ]'></span>
</h1>
						<div style={{"borderBottom" : "none"}} class="arrow bounce"><a style={{"borderBottom" : "none"}} class="fa fa-arrow-down fa-3x" href="#intro"></a></div>


					</header>

				
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Introduction</a></li>
							<li><a href="#mywork">My Work</a></li>
							<li><a href="#myskills">My Skills</a></li>
							<li><a href="#contact">Contact Me</a></li>
						</ul>
					</nav>

				
					<div id="main">

						
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>About Me</h2>
										</header>
										<p>I am a student in Aurora Illinois, interested in computer science and using it to help better the world.</p>

									</div>
									<span class="image"><img src="images/me.png" alt="" /></span>
								</div>
							</section>

						
							<section id="mywork" class="main special">
								<header class="major">
									<h2>My Work</h2>
								</header>
								<ul class="features">
									<li>
										<span class="icon major style5 fa-android"></span>
										<h3>RMG Studios</h3>
										<p>I started making apps for Android. The first app I have created is TicTacToe on the Play Store. Another app that I am currently working on is called Walkware. It will alert users and stop their music if they are walking across the street so they can cross safely in a city setting.</p>
									</li>
									<li>
										<span class="icon major style5 fa-copy"></span>
										<h3>Web Developing</h3>
										<p>I have created many websites in the past and continue to make more. Some of my most notable ones are <a href="https://nsgamezz.com">NSGAMEZZ</a> and I have collaborated on <a href="https://gandhiprep.com">GandhiPrep</a>.</p>
									</li>
									<li>
										<span class="icon major style5 fa-server"></span>
										<h3>Proxy</h3>
										<p>With the world getting closer together online, sometimes we want to get away from the tracking. This <a href="https://techyx.herokuapp.com">proxy</a> allows you to do just that.</p>
									</li>
									<li>
										<span class="icon major style5 fa-bus"></span>
										<h3>Bytecurve</h3>
										<p>I have helped the company, <a href="https://bytecurve.com" target="top">Bytecurve</a>, with developing their app for school bus drivers. Bytecurve is the company that manages the bussing system of one of the biggest school districts in Illinois, USA.</p>
									</li>
									<li>
										<span class="icon major style5 fa-code"></span>
										<h3>Hackathon</h3>
										<p>I attended a hackathon, <a href="https://windyhacks.com" target="top">Windy City Hacks</a>, in 2019. At this hackathon, although I didn't win anything, I learned many valuable lessons from many industry-leading experts that I have used in other projects of mine.</p>
									</li>
								</ul>

							</section>

						
							<section id="myskills" class="main special">
								<header class="major">
									<h2>My Skills</h2>
									<p>The following statistics show my skills in various areas.</p>
								</header>


								<p style={{"marginBottom" : "6px"}}>Android Studio</p>
								<div class="container">
								  <div class="skills as">90%</div>
								</div>


								<p style={{"marginBottom" : "6px"}}>HTML</p>
								<div class="container">
								  <div class="skills html">90%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>Java</p>
								<div class="container">
								  <div class="skills java">85%</div>
								</div>

								 
								 
								<p style={{"marginBottom" : "6px"}}>JavaScript</p>
								<div class="container">
								  <div class="skills js">80%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>Python</p>
								<div class="container">
								  <div class="skills py">70%</div>
								</div>

								<p style={{"marginBottom" : "6px"}}>CSS</p>
								<div class="container">
								  <div class="skills css">65%</div>
								</div>


							</section>

						
							<section id="contact" class="main special">
								<header class="major">
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
							<dl class="alt">
								<dt>Phone</dt>
								<dd>+1 (331)-321-6129</dd>
								<dt>Email</dt>
								<dd><a href="mailto:rajasmgandhi@gmail.com">rajasmgandhi@gmail.com</a></dd>
							</dl>
							<ul class="icons">
								<li><a href="https://www.twitter.com/_rajasgandhi" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
								<li><a href="https://www.facebook.com/rajas.gandhi.77" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
								<li><a href="https://www.instagram.com/_rajasgandhi/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
								<li><a href="https://www.github.com/nsgamezz" class="icon fa-github"><span class="label">GitHub</span></a></li>
								<li><a href="https://www.linkedin.com/in/rajas-gandhi-2134101a7/" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
							</ul>

						</section>

					</footer>

			</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			<script src="assets/js/scroll.js"></script>
			<script src="assets/js/typedtext.js"></script>
        </div>
    
    )
}

export default Home;