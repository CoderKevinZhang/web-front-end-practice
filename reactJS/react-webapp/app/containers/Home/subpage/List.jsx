import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getList} from "../../../fetch/home/home";
import HomeList from "../../../components/HomeList/index";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            data: []
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length ?
                        <div>
                            <h2 style={{fontSize: '16px', color: '#666', margin: '10px 15px'}}>猜你喜欢</h2>
                            <HomeList data={this.state.data}/>
                        </div> :
                        <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount(){
        const city = this.props.cityName;
        const result = getList(city, 0);
        this.resultHandler(result);
    }

    resultHandler(result){
        result.then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({
                hasMore: res.hasMore,
                data: res.data
            })
        })
    }
}

export default List;