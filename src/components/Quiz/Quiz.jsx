import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//components
import QuizBank from './QuizBank';
//styling
import './quiz.css';

function Quiz (){

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("")

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    function handleClick (){
        console.log("clicked")
        const nextQ = QuizBank.find(question => question.id === (currentQ.id)+1)
        console.log((currentQ.id))
        if (nextQ) {setCurrentQ(nextQ)}
        else {navigate('../results', { replace: true })}
    }


    return (
        <div className="pageContainer">
    
        <h3> {currentQ.question} </h3>
    
        <div className="quizContainer">

        <button className="quizButton" onClick={handleClick}> {currentQ.answerA} </button>

        <button className="quizButton" onClick={handleClick}> {currentQ.answerB} </button>

        <button className="quizButton" onClick={handleClick}> {currentQ.answerC} </button>
        </div>
        {<br />}
        {<br />}
<div style={{height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 0,
    }}>
<div style={{height: '100%',
    width: `${currentQ.progress}%`,
    backgroundColor: '#B2D199',
    borderRadius: 'inherit',
    textAlign: 'right'}}>
        <span style={{ padding: '15px', paddingBottom: '25px', color: 'white', fontWeight: 'bold'}}></span>
        </div>
        </div>
        </div>

    )
}

export default Quiz