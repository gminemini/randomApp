import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'


const baseURL = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
function App() {

  
   const randomClick=()=>{
    axios.get(baseURL).then((response)=>{
     const  number = response.data
     console.log(number)
     document.getElementById('bt').innerHTML = number
    })
   }

  return (
    <div className="App">
      <div className='random-box'>
          <div className='random'>Random</div>
          <div id='bt' className='number'  onClick={randomClick}>256</div>
      </div>
       
    </div>
  );
}

export default App;
