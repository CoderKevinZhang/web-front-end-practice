import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css'

class CityList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                <h2>城市列表</h2>
                <ul>
                    <li onClick={this.clickHandler.bind(this, '北京')}>北京</li>
                    <li onClick={this.clickHandler.bind(this, '上海')}>上海</li>
                    <li onClick={this.clickHandler.bind(this, '杭州')}>杭州</li>
                </ul>
            </div>
        )
    }

    clickHandler(newCity){
        this.props.changeCityFunction(newCity);
    }
}

export default CityList;