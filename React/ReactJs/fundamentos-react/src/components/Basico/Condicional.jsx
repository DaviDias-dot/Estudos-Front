import React from 'react'

export default props => {
    return (
        <div>
            <h1>O número é : </h1>
            {props.numero % 2 == 0 ?
            <span>Par</span> : <span>Ímpar</span>
            }
        </div>
    )
}