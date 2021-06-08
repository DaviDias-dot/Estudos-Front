import React, {Component} from 'react'
import './Contador.css'
import Display from './Display'
import Passo from './Passo'
import Botoes from './Botoes'

export default class Contador extends Component {
    state ={
        passo: this.props.passo || 1,
        valor: this.props.valor || 0 
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor -this.state.passo
        })}

        mudarPasso = (novoPasso) => {
            this.setState({
                passo: novoPasso
            })
        }

    render(){
        return(
            <div className="contador">
                <h2>Contador</h2>

                <Passo passo ={this.state.passo}
                    onPassoChange={this.mudarPasso}></Passo>
                <Display valor={this.state.valor}></Display>
                <Botoes inc={this.inc} dec={this.dec}></Botoes>

            </div>
        )
    }
}