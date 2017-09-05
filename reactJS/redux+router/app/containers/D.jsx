import React from 'react';
import {connect} from 'react-redux';

class D extends React.Component {
    render(){
        return(
            <div>
                <h1> Class D </h1>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.age}</h3>
                <h3>{this.props.user.description}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(D);