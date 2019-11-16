import React from 'react';

export const Header = ({ searchFn }) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<a className="navbar-brand font-weight-bold" href="/">CET</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto col-sm-12 col-lg-4">
				<li className="nav-item active">
					<a className="nav-link" href="#!">
						<i className="fa fa-home"></i> &nbsp; CITES-Plants E-commerce Tracker
						<span className="sr-only">(current)</span>
					</a>
				</li>
			</ul>
			<form action="#!" className="col-sm-12 col-lg-8" onSubmit={searchFn}>
				<div className="input-group border rounded-pill bg-dark p-0">
					<input type="search" id="search" name="search"
						   aria-describedby="button-addon3"
						   placeholder="What're you searching for?"
						   className="form-control bg-none border-0"/>
					<div className="input-group-append border-0">
						<button id="button-addon3" type="submit"
								className="btn btn-link text-warning">
							<i className="fa fa-search"></i>
						</button>
					</div>
				</div>
			</form>
		</div>
	</nav>
);
