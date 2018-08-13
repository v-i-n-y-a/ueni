import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './../store';

// Pages
import List from './List.jsx';
import Details from './Details.jsx';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={List} />
                <Route exact path="/companies" component={List} />
                <Route exact path="/companies/:id" component={Details} />
            </div>
        );
    }
}

export default withRouter(App);
