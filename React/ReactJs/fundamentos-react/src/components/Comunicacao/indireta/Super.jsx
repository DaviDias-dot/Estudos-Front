import React, {useState} from 'react'
import Sub from './Sub'

export default props =>{

    const [num, setNum] = useState(0)

    function QndClick(ValorGerado) {
        setNum(ValorGerado)
    }    

    return(
        <div>
            <h4> Valor: {num} </h4>
            <Sub QndClick={QndClick}></Sub>
            
        </div>
    )
}