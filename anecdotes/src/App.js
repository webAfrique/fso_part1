import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const length = anecdotes.length - 1;
  let highestVote = Math.max(...votes);
  //incase there's a tie
  let highest_freq = [];
  votes.forEach((vote, index)=>{
    if(vote === highestVote) highest_freq.push(index);
  });

  let highest_index = votes.indexOf(highestVote);

  const handleVote = () => {
    let newVotesArr = [...votes];
    newVotesArr[selected] += 1;
    setVotes(newVotesArr);
  }

  function randomIndex(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

  const handleNext = () => {
    let index = randomIndex(0, length);
    setSelected(index);
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
      {anecdotes[selected]}
      </div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVote}>vote this anecdote</button>
      <button onClick={handleNext}>next anecdote</button>
      <br></br>
      <h1>Anecdote(s) with most votes</h1>
      <div>
      {highest_freq.map(index => <div>{anecdotes[index]}</div>)}
      </div>
      <div>received {votes[highest_index]} votes</div>
      <h3>{selected}</h3>
    </>
  )
}

export default App