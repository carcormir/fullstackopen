import { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Average = (props) => {
  let total = 0
  let average = 0
  total = props.totalGoods + props.totalNeutrals + props.totalBads
  average = (props.totalGoods - props.totalBads) / total
  return <div>{props.text} {average}</div>
}

const All = (props) => {
  let all = 0
  all = props.totalGoods + props.totalNeutrals + props.totalBads
  return <div>{props.text} {all}</div>
}

const PositivePercentage = (props) => {
  let all = 0
  let positivePercentage = 0

  all = props.totalGoods + props.totalNeutrals + props.totalBads
  positivePercentage = (props.totalGoods / all)*100
  return <div>{props.text} {positivePercentage} %</div>
}

const Statistics = (props) => {
  let total = 0
  let average = 0
  let positivePercentage = 0

  total = props.totalGoods + props.totalNeutrals + props.totalBads
  positivePercentage = (props.totalGoods / total)*100
  average = (props.totalGoods - props.totalBads) / total

  if (total === 0){
    return (<div>No feedback given</div>)
  }
  
  return (<table>
            <tbody>
              <tr>
                <td>Average</td>
                <td>{average}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>PositivePercentage</td>
                <td>{positivePercentage} %</td>
              </tr>
            </tbody>
          </table>)
  // return (<div><div>Average {average}</div>
  //               <div>Total {total}</div>
  //               <div>PositivePercentage {positivePercentage} %</div>
  //   </div>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)
  
  const setToGood = newValue => {
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    setNeutral(newValue)

  }
  const setToBad = newValue => {
    setBad(newValue)
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

      <Statistics totalGoods={good} totalNeutrals={neutral} totalBads={bad} />

    </div>
  )
}

export default App