import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import A from '../containers/A'
import B from '../containers/B'
import C from '../containers/C'
import D from '../containers/D'
import E from '../containers/E'

class RouterMap extends React.Component{

    updateHandle(){
        // console.log('Router has been triggered');
    }

    render(){
        return(
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" components={App}>
                    <IndexRoute components={A}/>
                    <Route path="B" components={B}/>
                    <Route path="cook/:id" components={C}/>
                    <Route path="detail/:id" components={D}/>
                    <Route path="*" components={E}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;