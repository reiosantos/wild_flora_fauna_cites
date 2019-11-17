import React, {Fragment, Component} from 'react';
import {Header} from './components/Header';
import {Content} from './Containers/Content';
import './App.css';

class App extends Component {
    state = {
        search: null
    };
    
    search = (event) => {
        event.preventDefault();
        const value = document.getElementById('search').value;
        this.setState({search: value})
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
