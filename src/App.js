import React, {Component} from 'react';
import './App.css';
import Perfiles from './components/Card';


class App extends Component {
   state={
     visible: true
   };

   render(){
     return(
       <div className="App">
         <Perfiles />
       </div>
     )
   }
}

export default App;
