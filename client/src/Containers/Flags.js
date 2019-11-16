import React, { Component } from "react"
import {FlagCard} from '../components/FlagCard';
import { data } from './data.json';

export class Flags extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="accordion" id="accordionExample">
				{data.map(res => <FlagCard key={res.id} flag={res} />)}
			</div>
		)
	}
}
