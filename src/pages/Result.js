import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Result({score,name}) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!name) {
        navigate ("/");
      }
    }, [name, navigate]);
    const handleQuit = () => {
        navigate('/')
      };
  return (
    <div>
        <h1 className="display-1 pandding">{name}<br/>FINAL SCORE :<br/>{score} </h1>
        <button type="button" className="btn btn-secondary"  href="/" onClick={handleQuit}>GO TO HOME PAGE</button>
    </div>
  )
}

export default Result