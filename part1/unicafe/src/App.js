import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Percentage = ({ pos, count }) => {
  console.log('positive', pos)
  console.log('amount', count)
  const positive = (pos / count) * 100
  if (isNaN(positive)) {
    return (
      <div>
        <p>Positive 0 %</p>
      </div>
    )
  }
  return (
    <div>
      <p>Positive {positive} %</p>
    </div>
  )

}

const Average = ({ sum, count }) => {
  console.log('sum', sum)
  console.log('count', count)
  const summa = sum / count
  if (isNaN(summa)) {
    return (
      <div>
        <p>Average 0</p>
      </div>
    )
  }

  return (
    <div>
      <p>
        Average {summa}
      </p>
    </div>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handlesetGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }
  const handlesetNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handlesetBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlesetGood} text='Good' />
      <Button handleClick={handlesetNeutral} text='Neutral' />
      <Button handleClick={handlesetBad} text='Bad' />

      <h1>statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <Average sum={average} count={all} />
      <Percentage pos={good} count={all} />
    </div>
  )
}

export default App;
