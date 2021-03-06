import React from 'react'
import produtos from '../../data/produtos'


export default props => {

    function getProdutosListItem(){
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {props.nome} - R$ {prod.preco}
                </li>
        })
    }

    return(
        <div>
            <h2>Repetiçao</h2>
            <ul>
                {getProdutosListItem ()}
            </ul>
        </div>
    )
}