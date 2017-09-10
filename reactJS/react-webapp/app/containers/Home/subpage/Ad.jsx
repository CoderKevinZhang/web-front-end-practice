import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from "../../../fetch/home/home";
import HomeAd from "../../../components/HomeAd/index";

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length ?
                        <HomeAd adData={this.state.data}/> :
                        <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount(){
        const result = getAdData();
        result.then((res) => {
            return res.json()
        }).then((res) => {
            const ad_data = res;
            this.setState({
                data: ad_data
            })
        })
    }
}

export default Ad;