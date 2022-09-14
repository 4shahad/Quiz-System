
import { useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Form from './component/Form';
import Header from './component/Header';
import Quiz from './pages/Quiz'
import Result from'./pages/Result'

function App() {
  const [name,setName]=useState('')
  const[questions,setQuestions]=useState()
  const[score,setScore]=useState(0)

 //Hi

  
  const fetchQuestions = async (categoryList,difficultyList) => {
    const request = await fetch(`https://opentdb.com/api.php?
   amount=10&category=${categoryList}&difficulty=${difficultyList}&type=multiple`);
    const data = await request.json();
    console.log(data.results)
  
     setQuestions(data.results);
  
  };

  return (
    <BrowserRouter>
    <div className="App">
     <Header />  
     <Routes>
    <Route path='/'
     element={<Form 
      name={name} 
      setName={setName} 
      fetchQuestions={fetchQuestions}/>}/>
    <Route path='/quiz'
    element={<Quiz
     name={name} 
     questions={questions}
      score={score} 
      setScore={setScore} 
      setQuestions={setQuestions} />}/>
      <Route path='/result' element={<Result score={score} name={name} />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
