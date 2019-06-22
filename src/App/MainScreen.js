import React, { Component } from "react"
import { inject, observer } from 'mobx-react'

import WoutLoginScreen from './withoutLogin/WoutLoginScreen'
import WthLoginScreen from './withLogin/WthLoginScreen'

@inject('UserStore')
@observer
class MainScreen extends Component {

    constructor(props){
        super(props)
        const { UserStore } = this.props
        const token = sessionStorage.getItem("token")
        if(token)
            UserStore.addUserData({email: "", userToken:token})
    }

    render(){
        const { UserStore } = this.props

        if(UserStore.userData.token){
            return (
                <div>
                    <WthLoginScreen />
                </div>
            )
        }else{
            return (
                <WoutLoginScreen />
            )
        }
    }
}

export default MainScreen