import React from 'react';

export const Footer = (props) => (
	<footer className="bg-dark text-light pt-4 fixed-bottom">
			<ul className="list-unstyled list-inline text-center">
				<li className="list-inline-item">
					<a className="btn-floating btn-fb mx-1" href="#!">
						<i className="fab fa-facebook-f"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-tw mx-1" href="#!">
						<i className="fab fa-twitter"></i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/reio-santos/">
						<i className="fab fa-linkedin-in"> </i>
					</a>
				</li>
			</ul>
			<div className="footer-copyright text-center py-3">© 2019 Copyright</div>
	</footer>
);
