import React from 'react';
import ReactSwipe from 'react-swipe';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return(
            <ReactSwipe className="category" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        )
    }
}

export default Category;