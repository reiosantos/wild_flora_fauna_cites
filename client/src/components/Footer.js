import React from 'react';

export const Footer = (props) => (
	<footer class="bg-dark text-light pt-4 fixed-bottom">
			<ul class="list-unstyled list-inline text-center">
				<li class="list-inline-item">
					<a class="btn-floating btn-fb mx-1" href="#!">
						<i class="fab fa-facebook-f"> </i>
					</a>
				</li>
				<li class="list-inline-item">
					<a class="btn-floating btn-tw mx-1" href="#!">
						<i class="fab fa-twitter"></i>
					</a>
				</li>
				<li class="list-inline-item">
					<a class="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/reio-santos/">
						<i class="fab fa-linkedin-in"> </i>
					</a>
				</li>
			</ul>
			<div class="footer-copyright text-center py-3">© 2019 Copyright</div>
	</footer>
);
