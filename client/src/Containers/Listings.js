import React, {Component, Fragment} from 'react';
import {Listing} from '../components/Listing';

export class Listings extends Component {
	url = 'http://bc77ef0d.ngrok.io/cites/taxon_concepts/';
	
	state = {
		results: []
	};
	
	constructor(props) {
		super(props);
		this.fetchData();
	}
	
	fetchData() {
		if (this.props.search) {
			this.url = this.url + '?search=' + this.props.search
		}
		fetch(this.url)
			.then((response) => {
				this.setState({...response})
			})
			.catch((error) => {
				console.log(error);
			})
	}
	
	render() {
		return <Fragment>
			{
				this.state.results.map((res => <Listing result={res}/>))
			}
		</Fragment>
	}
}
