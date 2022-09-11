import React from 'react'
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

import'./Question.css'

function Question({currQues,setCurrQues,questions,options,correct,score,setScore,setQuestions}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
  
    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
      };
      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
      const navigate = useNavigate();
      const handleNext = () => {
        if (currQues > 8) {
          navigate("/result");
        } else if (selected) {
          setCurrQues(currQues + 1);
          setSelected();
        } else setError("Please select an option first");
      };
    
      const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
        navigate('/')
      };

  return (
    <div>
     <h2>Question {currQues +1} :</h2>  
     <hr/> 
     <div>
        <h3>{questions[currQues].question}</h3>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <button type="button" className="btn btn-danger"onClick={() => handleQuit()}  href="/">Quit</button>
          <button type="button" className="btn btn-success"  onClick={handleNext}> {currQues > 20 ? "Submit" : "Next Question"}</button>
        </div>

        </div> 
    </div>
  )
}

export default Question