import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Feed from './components/Feed'


class WthLoginScreen extends Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" component={Feed} />
                </Switch>
            </div>
        )
    }
}

export default WthLoginScreen