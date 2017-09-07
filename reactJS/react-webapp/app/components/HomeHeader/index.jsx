import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class HomeHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div id="home-header" className="clearFloat">
                <div className="home-header-left floatLeft">
                    <span>Beijing</span>
                    <i className="fa fa-angle-down"></i>
                </div>

                <div className="home-header-right floatRight">
                    <i className="fa fa-user-circle-o"></i>
                </div>

                <div className="home-header-middle">
                    <div className="search-bar">
                        <i className="fa fa-search fa-flip-horizontal"></i>
                        <input type="text" placeholder="Enter Key Words"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;