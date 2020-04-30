import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return(
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
        );
    }
}

export default Footer;