import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

import config from '../config'
import axios from 'axios'

@inject('UserStore')
@observer
class Interesses extends Component {

    constructor(props){
        super(props)

        this.state = {
            int: []
        }

        this.hadleSubmit = this.hadleSubmit.bind(this)
        this.hadleClick = this.hadleClick.bind(this)
    }

    hadleSubmit (e) {
        e.preventDefault()
        const token = sessionStorage.getItem("token")

        axios
        .post(config.apiUrl+"interesses", {
            token:token,
            interesses: this.state.int
        })
        .then((res)=>{
            if(res.data.status===200){
                sessionStorage.setItem("token","")
                this.props.history.push('/')
            }
        })

    }

    hadleClick(interesse){
        if(this.state.int.includes(interesse))
            this.setState({
                int : this.state.int.filter(int => int!==interesse)
            })
        else{
            this.state.int.push(interesse)
        }
    }

    render(){
        return(
            <div className="row center" style={{width: 500}} >
                <div className="input-field col s12" >
                    <label>
                        <input onClick={()=>this.hadleClick('Programação')} type="checkbox" className="filled-in" />
                        <span>Programação</span>
                    </label>
                </div>
                <div className="input-field col s12" >
                    <label>
                        <input onClick={()=>this.hadleClick('Liderança')} type="checkbox" className="filled-in" />
                        <span>Liderança</span>
                    </label>    
                </div>
                <div className="input-field col s12" >
                    <label>
                        <input onClick={()=>this.hadleClick('Empreeendedorismo')} type="checkbox" className="filled-in" />
                        <span>Empreendedorismo</span>
                    </label>
                </div>
                <div className="input-field col s12" >
                    <label>
                        <input onClick={()=>this.hadleClick('Social')} type="checkbox" className="filled-in" />
                        <span>Social</span>
                    </label>
                </div>
                <div className="col s12" >
                    <button onClick={this.hadleSubmit} className="btn" type="submit" >Enviar</button>
                </div>
            </div>
        )
    }
}

export default Interesses