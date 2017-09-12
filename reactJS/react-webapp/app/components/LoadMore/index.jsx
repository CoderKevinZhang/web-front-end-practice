import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class LoadMore extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more" ref="Load">
                {
                    this.props.loadingMore ?
                        <span>加载中...</span> :
                        <span>上拉加载更多</span>
                }
            </div>
        )
    }

    componentDidMount() {
        const loadDom = this.refs.Load;
        const loadFunction = this.props.loadingFunction;

        let timeoutId = null; // 设置滚动事件截流变量

        // 给window添加滚动事件
        window.addEventListener('scroll', () => {
            if (this.props.loadingMore) {
                return
            }

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(loadCallBack, 50); // 在触发滚动时的后50毫秒时，执行loadCallBack函数。目的是为了防止每滚动一次执行一次loadCallBack
        });

        function loadCallBack() {
            const top = loadDom.getBoundingClientRect().top;
            const windowHeight = window.screen.height;

            if(top && windowHeight - top >= 40){
                loadFunction();
            }

        }
    }
}

export default LoadMore;