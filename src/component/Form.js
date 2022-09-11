import React from 'react'
import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



  const Difficultyoptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ]


function Form({name,setName,fetchQuestions}) {
    
    const [categoryList,setCategoryList]=useState('')
    const [difficultyList,setDifficultyList]=useState('')
   
    const [errors,setErrors]=useState(false)
  
    
  
     

useEffect(() => {
    const fetchCategoryData = async () => {
      const request = await fetch('https://opentdb.com/api_category.php');
      const data = await request.json();

      const CategoryMap = data.trivia_categories.map((category) => {
        return {
          value: category.id,
          label: category.name,
        };
      });
      setCategoryList(CategoryMap);
    
    };
    fetchCategoryData();
  }, []);

    const onSelectCategory = async (option) => {
    console.log(option);
    setCategoryList(option.value);
    console.log('category optin',option.value);
  };



  const onSelectDifficulty = async (option) => {
    console.log(option);
    setDifficultyList(option.value);
    console.log('difficult option',option.value)
  };
  const navigate = useNavigate();
  const handleSubmit=()=>{
    if (!name ||!categoryList||!difficultyList) {
        setErrors(true);
        return;
      } else {
        setErrors(false);
        fetchQuestions(categoryList,difficultyList);
        navigate("/quiz");
      }
  }

//   // tooo here   
  return (
    
     <div className='container borderr text-center mt-5 shadow-lg p-3 mb-5 bg-body rounded '> 
      <h2>Quiz Settings</h2>
      <form className='form'>
      
  <div className="mb-3">
   
    <input
      type="text"
       className="form-control"
         placeholder='Enter Your Name'
         onChange={(e)=>setName(e.target.value)}
         value={name}
         />
  </div>

  
  

  <div className="mb-3">
  
  <Select 
  placeholder='Category Options' 
  className="form-control" 
  options={categoryList}
  onChange={onSelectCategory}
  value={categoryList}
  />
  
  </div>

  <div className="mb-3">
    
  <Select
   placeholder='Difficulty Options' 
   className="form-control" 
   options={Difficultyoptions}
   onChange={onSelectDifficulty}
   value={difficultyList}
  />
  </div>



  <button 
  type="button" 
  className="btn btn-secondary"
  onClick={handleSubmit}
  >
    START QUIZ
     </button>
  </form>
  {errors&&<samp className='sampStyle'>Plese Fill all Feilds</samp>}
    </div>
  )
}

export default Form