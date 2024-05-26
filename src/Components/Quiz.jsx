import React, { useRef, useState } from 'react'
import './Quiz.css'
import Data from '../assets/Data'

const Quiz = () => {
  const [index, setindex] = useState(0)
  const [question, setquestion] = useState(Data[index])
  const [lock, setlock] = useState(false)
  const [score, setscore] = useState(0)


  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);


  let option_array = [option1, option2, option3, option4]

  const checkans = (e, ans)=>{
    
    if(lock === false){
      if(question.ans === ans){
        e.target.classList.add("correct")
        setlock(true)
        setscore(prev=>prev + 1)
      }else
      {
        e.target.classList.add("wrong")
        setlock(true)
        option_array[question.ans - 1].current.classList.add("correct")
      }
    }
  }

  const next = ()=>{

  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>checkans(e, 1)}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>checkans(e, 2)}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>checkans(e, 3)}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>checkans(e, 4)}>{question.option4}</li>
      </ul>
      <div className='btn'>
      <button>next</button>
      </div>
      <div className="index">{index + 1} of {Data.length} question</div>
    </div>
  )
}

export default Quiz