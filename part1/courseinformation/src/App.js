import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>

      <Part1 part={props.part1} ex={props.ex1} />
      <Part2 part={props.part2} ex={props.ex2} />
      <Part3 part={props.part3} ex={props.ex3} />

    </div >
  )
}
const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.ex}
      </p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.ex}
      </p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.ex}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (

    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>

  )

}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = ' Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} ex1={exercises1}
        part2={part2} ex2={exercises2}
        part3={part3} ex3={exercises3} />
      <Total ex1={exercises1}
        ex2={exercises2}
        ex3={exercises3} />
    </div>
  )
}

export default App