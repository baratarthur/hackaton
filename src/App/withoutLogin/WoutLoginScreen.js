import React, { Component } from 'react'
import { inject, observer} from 'mobx-react'


import Cadastro from './Cadastro'
import Login from './Login'
import Interesses from './Interesses'
import { Switch, Route } from 'react-router-dom'

@inject('UserStore')
@observer
class WoutLoginScreen extends Component {
    render(){
        return (
            <div className='container center row' >
                <Switch>
                    <Route path="/interesses" component={Interesses} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        )   
    }
}

export default WoutLoginScreen