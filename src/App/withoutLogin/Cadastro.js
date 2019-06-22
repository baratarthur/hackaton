import React, { Component } from 'react'
import { inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom'
import config from '../config.json'
import axios from 'axios'

@inject('UserStore')
@observer
class Cadastro extends Component {

    constructor(props){
        super(props)

        this.state = {
            error:""
        }

        this.hadleSubmit = this.hadleSubmit.bind(this)
    }

    hadleSubmit(e){
        e.preventDefault()
        
        this.setState({error:""})

        const nickname = e.target.nickname.value
        const password =  e.target.password.value
        const confirmPassword =  e.target.confirmPassword.value
        const email =  e.target.email.value

        if( password ===  confirmPassword){
            const dadosCadatro = {
                nick: nickname,
                email: email,
                senha: password
            }

            const data = {}
            
            const {history} = this.props
            
            axios
            .post(config.apiUrl+"cadastrar", dadosCadatro)
            .then((res)=>{
                if (res.data.status === 200){
                    data.userToken = res.data.token
                    data.email = email
                    
                    history.push('interesses')
                    sessionStorage.setItem("token", res.data.token)
                }else {
                    this.setState({
                        error: res.data.mensagem
                    })
                }
            })

        }else{
            this.setState({
                error: "Os campos de senha e confirmação não estão iguais!"
            })
        }
    }

    render(){
        return(
            <div>
                <div className="center row" style={{paddingTop:60}}>
                    <Link className="left col s1" to="/" ><i className="material-icons">arrow_back</i></Link>
                    <h4 className="col s11 center" >Cadastre-se</h4>
                </div>
                <h6 className="center" style={{color:"red"}}>{this.state.error}</h6>
                <form className='col s12' onSubmit={this.hadleSubmit} >
                    <div className='row' >
                        <div className='input-field col s12'>
                            <label htmlFor="nickname">Usuário:</label>
                            <input type='text' name='nickname' />
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor="email">Email:</label>
                            <input type='email' name='email' />
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor="password">Senha:</label>
                            <input type='password' name='password' />
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor="confirmPassword">Confirme Senha:</label>
                            <input type='password' name='confirmPassword' />
                        </div>
                        <div className='input-field center col s12'>
                            <button className='btn waves-effect waves-light' type='submit' >Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Cadastro