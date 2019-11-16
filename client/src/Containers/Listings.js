import React, { Component, Fragment } from "react"
import { Listing } from "../components/Listing"

export class Listings extends Component {
  url = "http://localhost:8000/cites/taxon_concepts/"

  state = {
    results: []
  }

  constructor(props) {
    super(props)
    this.fetchData()
  }

  fetchData() {
    if (this.props.search) {
      this.url = this.url + "?search=" + this.props.search
    }
    fetch(this.url)
      .then(res => res.json())
      .then(response => {
        this.setState({ results: response.results })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
				<div class="accordion" id="accordionExample">
				{this.state.results.map(res => (
          <Listing result={res} />
        ))}
				</div>
      </Fragment>
    )
  }
}
