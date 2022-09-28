import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) =>{
  console.log(props)
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Total amount of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

// prev version
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} 
//                 part2={part2} 
//                 part3={part3} 
//                 exercises1={exercises1} 
//                 exercises2={exercises2} 
//                 exercises3={exercises3}
//         />
//       <Total total={exercises1 + exercises2 + exercises3}  />
//     </div>
//   )
// }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}
            />
      <Total parts={course.parts}  />
      {counter}
      <p>___________________________</p>
      
    </div>
  )
}
export default App