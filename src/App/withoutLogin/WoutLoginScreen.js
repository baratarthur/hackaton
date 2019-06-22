import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('UserStore')
@observer
class WoutLoginScreen extends Component {

    constructor (props) {
        super(props)

        this.hadleSubmit = this.hadleSubmit.bind(this)
    }

    hadleSubmit(e) {
        e.preventDefault()
        // TODO enviar requisição aqui
        const data = {
            userId : "123",
            userEmail : e.target.email ,
            userName : "123",
            userToken : "123",
            userType : 0
        }

        const {UserStore} = this.props

        UserStore.addUserData(data)
    }

    render(){
        return (
            <div className='container center row' >
                <form className='col s12' onSubmit={this.hadleSubmit} >
                    <div className='row right' >
                        <div className='input-field col s12'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' />
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' />
                        </div>
                    </div>
                </form>
                <button className='btn btn-flat' type='submit' >Login</button>
                <br/>
                
                <br/>
            </div>
        )   
    }
}

export default WoutLoginScreen