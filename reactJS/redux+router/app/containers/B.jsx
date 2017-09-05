import React from 'react';
import {hashHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class B extends React.Component {
    render(){
        const array = this.props.users;
        return(
            <ul>
                {array.map((user) => {
                    return <li key={user.id} onClick={this.onClickHandle.bind(this, user)}>{user.first} {user.last}</li>
                })}
            </ul>
        )
    }

    onClickHandle(user){
        hashHistory.push(`/detail/${user.id}`);
        return this.props.selectUser(user);
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(B);