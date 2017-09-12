import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import CityHeader from '../../components/CityHeader/index'
import CurrentCity from "../../components/CurrentCity/index";
import CityList from "../../components/CityList/index";
import {CITYNAME} from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';
import {bindActionCreators} from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userInfo';
import {hashHistory} from 'react-router';

class City extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                <CityHeader/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeCityFunction={this.changeCityFun.bind(this)}/>
            </div>
        )
    }

    changeCityFun(newCity){
        // 修改 userInfo.cityName
        const userInfo = this.props.userInfo;
        if (userInfo.cityName !== newCity){

            userInfo.cityName = newCity;

            // 修改 redux
            this.props.userInfoActions.update(userInfo);

            // 修改 localStorgeKey
            LocalStore.setItem(CITYNAME, newCity);

            //跳转页面
            hashHistory.push('/');
        }
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);