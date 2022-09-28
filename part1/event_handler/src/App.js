import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// full props 
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// Destructuring props and making functions simple
const Display = ({ counter }) => <div>{counter}</div>

// full props 
// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }

// Destructuring props and making functions simple
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const INIT_COUNTER = 0

const App = () => {
  const [ counter, setCounter ] = useState(INIT_COUNTER)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}


export default App;
