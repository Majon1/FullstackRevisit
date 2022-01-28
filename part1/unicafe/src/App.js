import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Percentage = ({ pos, count }) => {
  console.log('positive', pos)
  console.log('amount', count)
  const positive = Math.round(((pos / count) * 100) * 100) / 100
  if (isNaN(positive)) {
    return (

      <table>
        <tbody>
          <tr>
            <td>Positive</td><td>  0 %</td>
          </tr>
        </tbody>
      </table>

    )
  }
  return (

    <table>
      <tbody>
        <tr>
          <td>
            Positive</td><td> {positive} %</td>
        </tr>
      </tbody>
    </table>

  )
}

const Average = ({ sum, count }) => {
  console.log('sum', sum)
  console.log('count', count)
  const summa = Math.round(sum / count * 100) / 100
  if (isNaN(summa)) {
    return (
      <div>
        <p>Average 0</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='Average' /></td><td><StatisticLine value={summa} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='Good' /></td><td> <StatisticLine value={props.good} /></td>
          </tr><tr>
            <td><StatisticLine text='Neutral' /></td><td> <StatisticLine value={props.neutral} /></td>
          </tr><tr>
            <td><StatisticLine text='Bad' /></td><td> <StatisticLine value={props.bad} /></td>
          </tr><tr>
            <td><Average sum={props.average} count={props.all} /></td>
          </tr><tr>
            <td><Percentage pos={props.good} count={props.all} /></td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}
const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App;