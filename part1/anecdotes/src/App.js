import React, { useState } from "react"

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Most = ({ anecdotes, vote }) => {
  let result = vote.indexOf(Math.max(...vote))
  return (
    <div> {anecdotes[result]}
      <p>Has {vote[result]} votes </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))

  const nextAnecdote = () => {
    setSelected(selected + 1)
  }

  const addVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log('add vote', selected);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={addVote} text='Vote' />
      <Button handleClick={nextAnecdote} text='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Most anecdotes={anecdotes} vote={vote} />
    </div>
  )
}

export default App;