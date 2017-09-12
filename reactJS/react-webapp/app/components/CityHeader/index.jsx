import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

import './style.css'

class CityHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="city-header">
                <Link to="/">
                    <i className="fa fa-angle-left"></i>
                </Link>
                <span>选择城市</span>
            </div>
        )
    }
}

export default CityHeader;