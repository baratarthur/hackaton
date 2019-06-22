import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'
import axios from 'axios'
import config from '../../config'
import $ from 'jquery'

@inject('UserStore')
@observer
class Postar extends Component{

    constructor(props){
        super(props)

        this.sendComent = this.sendComent.bind(this)
    }

    sendComent(e){
        e.preventDefault()
        const token = this.props.UserStore.userData.token

        $('#postar-button').attr("disabled", true)

        axios
        .post(config.apiUrl+"feed", {
            token : token,
            tipo : e.target.tipo.value,
            interesse : this.props.interesse,
            texto : e.target.coment.value
        })
        .then(res =>{
            if(res.data.status===200){
                this.props.refresh()
                $('#postar-button').attr("disabled", false)
            }
        })

    }

    render(){
        return(
            <form className='col s12' onSubmit={this.sendComent} >
                <div className='row' >
                    <div className="input-field col s12">
                        <select name="tipo" className="browser-default" >
                            <option value="" defaultValue>Escolha a Opção</option>
                            <option value="Evento">Evento</option>
                            <option value="Palestra">Palestra</option>
                            <option value="Ideia">Ideia</option>
                            <option value="Profissão">Profissão</option>
                            <option value="Discussão">Discussão</option>
                        </select>
                    </div>
                    <br/>
                    <div className='input-field col s12'>
                        <textarea name="coment" style={{backgroundColor:"white", borderRadius:3}} id="textarea" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea">Comente alguma coisa:</label>
                        <button id="postar-button" type="submit" className="btn right" >Postar</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Postar