import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css';

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        const adData = this.props.adData;
        return (
            <div id="ad-home">
                <h2>超值特惠</h2>
                <div className="ad-home-container clearFloat">
                    {
                        adData.map((value, index) => {
                            return <div key={index} className="ad-items floatLeft">
                                <a href={value.link}>
                                    <img src={value.img} alt={value.title}/>
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }

}

export default HomeAd;