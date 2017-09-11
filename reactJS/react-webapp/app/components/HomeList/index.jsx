import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from "./Item/index";

import './style.css';

class HomeList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="items-wrapper">
                {
                    this.props.data.map((value, index) => {
                        return <Item key={index} itemValues={value}/>
                    })
                }
            </div>
        )
    }
}

export default HomeList;