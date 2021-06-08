import React from 'react'

export default props => {
    return (
        <div>
        <button onClick={()=>{
            props.QndClick(Math.random())
        }}>Alterar</button>
    </div>
    )
}
