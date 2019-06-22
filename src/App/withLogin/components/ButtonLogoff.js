import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('UserStore')
@observer
class ButtonLogoff extends Component {
    
    constructor(props){
        super(props)

        this.hadleSubmit = this.hadleSubmit.bind(this)
    }

    hadleSubmit(){
        const {UserStore} = this.props
        UserStore.addUserData({})
        sessionStorage.setItem("token", "")
    }

    render(){
        return(
            <button className="btn btn-logoff" onClick={this.hadleSubmit} >Sair</button>
        )
    }
}

export default ButtonLogoff