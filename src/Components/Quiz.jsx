import React, { useState } from 'react'
import './Quiz.css'
import Data from '../assets/Data'

const Quiz = () => {
  const [index, setindex] = useState(0)
  const [question, setquestion] = useState(Data[index])
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. Which Device is reuired for internet Connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>Bridge</li>
        <li>Mobile</li>
      </ul>
      <div className='btn'>
      <button>next</button>
      </div>
      <div className="index">1 of 5 question</div>
    </div>
  )
}

export default Quiz