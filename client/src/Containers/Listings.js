import React, { Component, Fragment } from 'react';
import { Listing } from '../components/Listing';

export class Listings extends Component {
  url = 'http://localhost:8000/cites/taxon_concepts/';

  state = {
    results: []
  };

  constructor(props) {
    super(props);
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      this.fetchData(nextProps.search);
    }
  }

  fetchData(search) {
    var url = this.url;
    if (search) {
      url = this.url + '?search=' + search.trim();
    }
    fetch(url)
      .then(res => res.json())
      .then(response => {
        this.setState({ results: response.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="accordion" id="accordionExample">
          {this.state.results.map(res => (
            <Listing result={res} />
          ))}
        </div>
      </Fragment>
    );
  }
}
