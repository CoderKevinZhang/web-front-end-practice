import React from 'react';
import HomeHeader from '../../components/HomeHeader/index';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                {/*The Header of Main Page*/}
                <HomeHeader/>
            </div>

            // The Slide Bar of Advertisement

            // The Special Part of Main Page


            // The Guess You Like Part of Main Page
        )
    }
}

export default Home;