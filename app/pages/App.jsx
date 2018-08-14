import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './../store';

// Pages
import List from './List.jsx';
import Details from './Details.jsx';

class App extends Component {

    render() {
        return (
            <main className="app">
                <Route exact path="/" component={List} />
                <Route exact path="/details/:id" component={Details} />
            </main>
        );
    }
}

export default withRouter(App);
