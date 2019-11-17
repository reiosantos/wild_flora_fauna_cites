import React, { Component } from "react"
import {FlagCard} from '../components/FlagCard';
import { data } from './data.json';

export class Flags extends Component {

	render() {
		return (
			<div className="accordion" id="accordionExample">
			<h3>Flagged plants on e-commerce platforms</h3>
				{data.map(res => <FlagCard key={res.id} flag={res} />)}
			</div>
		)
	}
}
