const Header = (course) => {
  return (
    <div>
      <h1>
        {course.course}
      </h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <div>
      <p>
      {content.content} {content.number}
      </p>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>
      Total amount of exercises {total.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={part1} number={exercises1}/>
      <Content content={part2} number={exercises2}/>
      <Content content={part3} number={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}  />
    </div>
  )
}

export default App