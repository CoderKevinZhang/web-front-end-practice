import React from 'react';
import { Link } from 'react-router'

class A extends React.Component {
    render(){
        return(
            <div>
                <h1> Class A </h1>
                <Link to="/B">go to B</Link>
            </div>
        )
    }
}

export default A;