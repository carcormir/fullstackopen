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
      <Part part={props.part2.name} exercise={props.part2.exercises}/>
      <Part part={props.part1.name} exercise={props.part1.exercises}/>
      <Part part={props.part3.name} exercise={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Total amount of exercises {props.total}
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} 
               part2={part2} 
               part3={part3}
            />
      <Total total={part1.exercises + part2.exercises + part3.exercises}  />
    </div>
  )
}
export default App