import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import App from '../containers';
import Home from '../containers/Home/index';
import City from "../containers/City/index";

class RouterMap extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return(
            <Router history={this.props.history}>
                <Route path='/' components={App}>
                    <IndexRoute components={Home}/>
                    <Route path='/city' components={City}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;