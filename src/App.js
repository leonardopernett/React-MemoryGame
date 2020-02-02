import React ,{ Component} from 'react';
import Header from './components/Header'
import Tablero from './components/tablero'
import './app.css'
import contruirBaraja from  './libs/contruirBaraja'



const estadoInicial = ()=>{
    const baraja = contruirBaraja()
    return {
      baraja
    }
}


class App extends Component {

   constructor(props){
     super(props)
     this.state = estadoInicial()   
    }

   render(){
    return (
      <div className="App">
         <Header />
         <Tablero
          baraja ={this.state.baraja}
         />
      </div>
    );
   }
 
}

export default App;
