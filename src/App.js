import React, { Component } from 'react';
import './App.css';
import green from './green.png'
class App extends Component {
  render() {
    return (
      
    <div className="App">
         <table className="titleBar" >
           <tbody>
             <tr>
               <td>
                 <img width="50" src={green} alt="app icon"/>
               </td>
               <td width="8" />
               <td>
                    <h1>MovieDB Search</h1>
               </td>
             </tr>
           </tbody>
         </table>
         <input style={{
           fontSize:24,
           display:'block',
           widthy:"99%",
           paddingTop:8,
           paddingLeft:16
         }}  placeholder="Enter search" />
    </div>
    );
  }
}

export default App;