import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getList} from "../../../fetch/home/home";
import HomeList from "../../../components/HomeList/index";
import LoadMore from "../../../components/LoadMore/index";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false, // 记录当前状态是否还有更多内容
            data: [], // 存储数据
            isLoadingMore: false, // 记录当前状态是否处于加载状态
            page: 1 // 记录下一页的页数
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

                {
                    this.state.hasMore ?
                        <LoadMore loadingMore={this.state.isLoadingMore} loadingFunction={this.loadMoreData.bind(this)}/> :
                        <div></div>
                }
            </div>
        )
    }

    componentDidMount(){
        const city = this.props.cityName;
        const result = getList(city, 0);
        this.resultHandler(result);
    }

    loadMoreData(){
        this.setState({
            isLoadingMore: true
        });

        const city = this.props.cityName;
        const page = this.state.page;
        const result = getList(city, page);
        this.resultHandler(result);

        this.setState({
            isLoadingMore: false,
            page: page + 1
        })
    }

    resultHandler(result){
        result.then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({
                hasMore: res.hasMore,
                data: this.state.data.concat(res.data)
            })
        })
    }
}

export default List;