import React, {Fragment, Component} from 'react';
import {Header} from './components/Header';
import {Content} from './Containers/Content';
import './App.css';

class App extends Component {
    state = {
        search: null
    };
    
    search(event) {
        event.preventDefault();
        this.setState({search: event.target.value})
    }
    
    render() {
        return (
            <Fragment>
                <Header searchFn={this.search}/>
                <Content search={this.state.search}/>
            </Fragment>
        );
    }
}

export default App;
