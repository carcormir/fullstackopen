import { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [weights, setWeights] = useState(0)  
  const [positivePercentage, setPositivePercentage] = useState(0)
  
  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
    console.log('good', good)
    setAll(all+1)
    setWeights(weights+1)
    setAverage(weights/all)

    console.log('all', all)
    console.log('weights', weights)
    console.log('average', average)
    console.log('---------')
  }
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
    setWeights(weights+0)
    setAll(all+1)
    setAverage(weights/all)
  }
  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
    setWeights(weights-1)
    setAll(all+1)
    setAverage(weights/all)
  }

  return (
    <div>
      <Header title={"give feedback"} />
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="bad" />

      <Header title={"statistics"} />
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />

      <Display text={"all"} value={all} />
      <Display text={"average"} value={average} />
      <Display text={"positive percentage"} value={positivePercentage} />
    </div>
  )
}

export default App