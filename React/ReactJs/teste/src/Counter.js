import React, {useState, useEffect} from 'react';

function Counter(props) {

    const [count, setCount] = useState(props.count)

    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")));
        
        return()=>{
            console.log("Não tem mais contador")
        }
    }, [])

    useEffect(()=>{
        document.title=count
        localStorage.setItem("count",count);
    }, [count])

    function Add() {
        setCount(count +1);
    }

    return(<div>
              <h1>Counter:{count}</h1>
              <button onClick={Add}>Add</button>
           </div>
    )
    
}


// class Counter extends React.Component{


//     constructor(props){
//         super(props);
//         this.state = {count: this.props.count}
//         this.add = this.add.bind(this)
//     }

// add(){
//     this.setState((state)=>{return {count : state.count +1}})
// }

//     render(){
//         return (<div>
//             <h1>Counter:{this.state.count} </h1>
//             <button onClick ={this.add}>Add</button>
//             </div>)
//     }
// }

export default Counter