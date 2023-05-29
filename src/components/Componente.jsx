import React, {Component} from 'react';

//Componente desde una Arrow Function

// const Componente=(props)=>{
//     <h1>{props.message}</h1>
// }


//Componente Funcional

// function Componente(props){
//     return <h2>{props.msg}</h2>
// }

class Componente extends Component{
    render(){
        return <h2>{this.props.message}</h2>
    }


}

export default Componente;