import React, { Component } from "react"
import { inject, observer } from 'mobx-react'

import WoutLoginScreen from './withoutLogin/WoutLoginScreen'
import WthLoginScreen from './withLogin/WthLoginScreen'

@inject('UserStore')
@observer
class MainScreen extends Component {
    render(){
        const { UserStore } = this.props

        if(UserStore.userData.token){
            return (
                <WthLoginScreen userType={UserStore.userData.userType} />
            )
        }else{
            return (
                <WoutLoginScreen />
            )
        }
    }
}

export default MainScreen