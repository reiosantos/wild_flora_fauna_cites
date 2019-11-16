import React from 'react';
import {Listings} from './Listings';

export const Content = ({ search }) => {
	return <div className="container-fluid content-div mt-5">
		<nav>
			<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
				<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
				   href="#nav-home" role="tab" aria-controls="nav-home"
				   aria-selected="true">Listings</a>
				<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
				   href="#nav-profile" role="tab" aria-controls="nav-contact"
				   aria-selected="false">At Glance</a>
			</div>
		</nav>
		<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
			<div className="tab-pane fade show active" id="nav-home" role="tabpanel"
				 aria-labelledby="nav-home-tab">
				<Listings search={search}/>
			</div>
			<div className="tab-pane fade" id="nav-profile" role="tabpanel"
				 aria-labelledby="nav-profile-tab">
				Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat
				qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam
				sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure
				incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do
				nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
				Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.
				Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
			</div>
		</div>
	</div>
};
