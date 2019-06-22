import React, { Component } from 'react'
import { inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom'
import config from '../config.json'
import axios from 'axios'
import logo from './3.png'

@inject('UserStore')
@observer
class Login extends Component {

    constructor (props) {
        super(props)

        this.state = {
            error: ""
        }

        this.hadleSubmit = this.hadleSubmit.bind(this)
    }

    hadleSubmit(e) {
        e.preventDefault()
        this.setState({error:""})

        const dadosLogin = {
            email: e.target.email.value,
            senha: e.target.password.value 
        }

        const data = {}

        axios.post(config.apiUrl+"login", dadosLogin)
        .then((res) => {

            if (res.data.status === 200){
                data.userToken = res.data.token
                data.email = dadosLogin.email

                const {UserStore} = this.props
        
                UserStore.addUserData(data)
                sessionStorage.setItem("token", data.userToken)
            }else {
                this.setState({
                    error: res.data.mensagem
                })
            }

        })
    }

    render(){
        return(
            <div>
                <br/>
                <img src={logo} style={{width:150, height: 150}} />
                <h4 className="center" >Ada Friends</h4>
                <br/>
                <h6 className="center" style={{color:"red"}}>{this.state.error}</h6>
                <form className='col s12' onSubmit={this.hadleSubmit} >
                    <div className='row' >
                        <div className='input-field col s12'>
                            <input type='email' name='email' />
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor="password">Senha:</label>
                            <input type='password' name='password' />
                        </div>
                        <div className='input-field center col s12'>
                            <button className='btn waves-effect waves-light' type='submit' name="action" >
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>
                <Link to="/cadastro" >Cadastre-se</Link>
            </div>
        )
    }
}

export default Login