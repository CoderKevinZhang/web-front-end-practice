import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class Item extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const data = this.props.itemValues;

        return (
            <div className="single-item clearFloat">
                <div className="item-img floatLeft">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-contents">
                    <div className="content-1 clearFloat">
                        <span className="title floatLeft">{data.title}</span>
                        <span className="distance floatRight">{data.distance}</span>
                    </div>
                    <div className="content-2 clearFloat">
                        <span className="subtitle floatLeft">{data.subTitle}</span>
                    </div>
                    <div className="content-3 clearFloat">
                        <span className="price floatLeft">¥{data.price}</span>
                        <span className="number floatRight">已售{data.soldnum}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;