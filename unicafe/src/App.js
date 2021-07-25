//import { prependOnceListener } from 'node:process';
import React, { useState } from 'react';
//import './App.css';

const Statistic = ({score, children}) => {
  return(
   <tr>
      <td>{children}</td> 
      <td>{score}</td>
   </tr>
  )
}

const Button = ({clickhandler, children}) => {
  return(
    <button onClick={clickhandler}>{children}</button>
  )
}

const Stats = ({totalScore, scores}) =>{
  let denominator = Object.entries(scores).length;
  let avgScore = totalScore / denominator;
  let positive_percent = (scores.good * 100 / totalScore) || 0 ;
  console.log(denominator)
 return(
  <>
    <h2>statistics</h2>
    <table>
        <tbody>
          <Statistic score={scores.good}>good</Statistic>
          <Statistic score={scores.neutral}>neutral</Statistic>
          <Statistic score={scores.bad}>bad</Statistic>
          <Statistic score={totalScore}>Total score </Statistic>
          <Statistic score={avgScore}>Average score</Statistic>
          <Statistic score={`${positive_percent} %`}>Positive</Statistic>
        </tbody>
    </table>
</>
 )
}

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodClick = () => {
    setGood( good + 1)
  }
  const handleNeutClick = () => {
    setNeutral( neutral + 1 )
  }
  const handleBadClick = () => {
    setBad( bad + 1 )
  }

  let scores = {good, neutral, bad};
  let total_score = good + neutral + bad;
  

  return(
    <>
    <h1>give feedback</h1>
    <Button clickhandler={handleGoodClick}>good</Button>
    <Button clickhandler={handleNeutClick}>neutral</Button>
    <Button clickhandler={handleBadClick}>bad</Button>
    <div>
        {total_score === 0 ? "No feedback given" : <Stats totalScore={total_score} scores={scores}/>}
    </div>
    </>
  )
  
}

//console.log(React.createElement(App));
export default App;
