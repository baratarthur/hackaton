import React, { Component } from 'react'
import ButtonLogoff from './ButtonLogoff'
import Postar from './Postar'
import { observer, inject } from 'mobx-react'

import axios from 'axios'
import $ from 'jquery'
import config from '../../config'

@inject('UserStore')
@observer
class Feed extends Component{
    constructor(props){
        super(props)

        this.state = {
            interesses : [],
            token: this.props.UserStore.userData.token,
            posts: []
        }

        this.fetchData = this.fetchData.bind(this)
        this.showCats = this.showCats.bind(this)
        this.fetchData()
    }

    fetchData(){

        axios
        .get(config.apiUrl+'feed')
        .then((res)=>this.setState({posts: res.data.resultado}))

        axios
        .post(config.apiUrl+'informacao', {token:this.state.token})
        .then((res)=>{
           this.setState({
               interesses : res.data.resultado[0].interesses
           })
        })

    }

    showCats(){
        return this.state.interesses.map((cat, index) => (
            <div key={index} style={{width: 300, float:"left"}} className="col center">
                <h5>{cat}</h5>
                <div>
                    <Postar key={cat} interesse={cat} refresh={this.fetchData} />
                </div>
                <div>
                    {
                        this.state.posts
                        .filter(post=>post.interesse === cat)
                        .map((post, index) => (
                            <div className='row' style={{backgroundColor:"white", borderRadius:10, padding:15, margin:15}} key={index} >
                                <div className="col s12 ">
                                    <h6 className="left"> @{post.usuario}</h6>
                                    <h6 className="right" ><strong>{post.tipo}</strong></h6>
                                </div>
                                <div className="col s12 ">
                                    {post.texto}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }

    render(){
        const cards = this.showCats()

        $('.feed').width(this.state.interesses.length*300)

        return(
            <div className="row" >
                <div className="col s12">
                    <button 
                    className="btn waves-effect btn-refresh" style={{position:"fixed", top:10, left:10}}
                    onClick={()=> this.fetchData()}>
                        <i className="material-icons">refresh</i>
                    </button>
                    <ButtonLogoff className="btn-logoff" />
                </div>
                <div className="col s12" style={{paddingTop: 60}}>
                    <div className='feed row' >
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed