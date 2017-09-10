import React from 'react';
import HomeHeader from '../../components/HomeHeader/index';
import Category from '../../components/Category/index';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Ad from "./subpage/Ad";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                {/*The Header of Main Page*/}
                <HomeHeader cityName={this.props.userInfo.cityName}/>

                {/*The Slide Bar of Advertisement*/}
                <Category />

                <div style={{height: '15px'}}></div>

                {/*The Special Part of Main Page*/}
                <Ad/>
            </div>

            // The Special Part of Main Page


            // The Guess You Like Part of Main Page
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);