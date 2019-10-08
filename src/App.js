import React, {Component} from 'react';
import './App.css';
import Buscar from './components/search';


class App extends Component {
   state={
     visible: true
   };

   render(){
     return(
       <div className="App">
         <Buscar />
       </div>
     )
   }
}
export default App;
