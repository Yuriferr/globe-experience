import React, { useEffect, useState } from 'react'
import './App.scss'

import axios from 'axios'

import Header from './components/Header/index'
import Main from './components/Main/index'
var cont = -220;
const card = document.querySelector('.card')

function App() {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    await axios.get('./data.json').then(reponse => {
      setData(reponse.data.travel_experiences)
    })
  }

  function setIndexLess(){
    if(index >= 1){
      setIndex(index - 1)

      cont += 220;
      document.querySelector(".inner").style.marginLeft = `${cont}px`
    }else{
      return
    }
  }

  function setIndexMore(){
    if(index < (data.length - 1)){
      setIndex(index + 1)

      cont -= 220;
      document.querySelector(".inner").style.marginLeft = `${cont}px`

      card.style.transform = 'scale(16.5)'
      card.style.opacity = '0'
    }else{
      return
    }
  }

  return (
    <div className='App'>
      <Header/>
        
      <Main index={index}/>

      <div className='containerCards'>
        <div className='carrousel'>
          <div className='inner'>
            {data.map((item, index) => {
              return(
                <div key={index} className='card' style={{backgroundImage: `url(${item.image})`}}>

                </div>
              )
            })}
          </div>
        </div>
        <div className='buttons'>
          <button onClick={setIndexLess}>-</button>
          <button onClick={setIndexMore}>+</button>
        </div>
      </div>

    </div>
  )
}

export default App
