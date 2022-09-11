import'./Quiz.css'
import React from 'react'
import { useEffect ,useState } from 'react'
import Spinner from "react-spinners/ClipLoader";
import Question from '../component/Question';


function Quiz({name,questions,score,setScore,setQuestions}) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    
  
    useEffect(() => {
        console.log(questions)
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);
  
    console.log(options);
  
    const handleShuffle = (optionss) => {
      return optionss.sort(() => Math.random() - 0.5);
    };


  return (
    <div className="quiz">
        <span className="subtitle">
            let's answer the questions {name}
        </span>
        {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              Score : {score}
            </span>
          </div>
           <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          /> 
        </>
      ) : (
        <Spinner style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}/>
          
        
      )}
  
    </div>
  )
}

export default Quiz