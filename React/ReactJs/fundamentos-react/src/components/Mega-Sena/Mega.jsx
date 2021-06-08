import React, { useState } from 'react'

export default (props) => {
    const [num, setNum] = useState (Array(props.qtdeNumero).fill(0))
    
    function gerarNovoNumero (array){
        const min = 1
        const max = 60
        const novoNum = parseInt(Math.random()*(max - min) + min)
        return array.includes(novoNum) ? gerarNovoNumero(array) : novoNum
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumero)
        .fill(0)
        .reduce(a => [...a, gerarNovoNumero(a)], [])
        .sort((a, b) => a-b)
        setNum (novoArray)
    }
    
    return(
        <>
        <h3>Mega</h3>
        <h4>{num.join(' ')}</h4>
        <button onClick = {gerarNumeros}>Gerar numeros</button>
        </>
    );
};