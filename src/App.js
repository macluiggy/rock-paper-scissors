import './App.css';
import { useState, useReducer, useEffect } from 'react';
//components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const initialState = {
  isLoading: false,
  change: true,
}

const options = ['paper', 'scissors', 'rock'];
function getRamdomNumber() { return Math.floor(Math.random() * 3) }

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPTION_SELECTED':
      return {
        ...state,
        hand: action.payload,
        isLoading: true,
        machineHand: options[getRamdomNumber()],
        change: !state.change
      }
    case 'RESET':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;

  }
}
const useScore = () => {
  const [score, setScore] = useState(
      localStorage.getItem('score') || 0
    );

  useEffect(() => {
   localStorage.setItem('score', score)
  }, [score])
  return [parseInt(score), setScore]
}
function App() {
  const [score, setScore] = useScore()
  const [wait, setWait] = useState(false)
  const [win, setWin] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState);
  const {hand, isLoading, change, machineHand} = state

  const resetScore = () => setScore(0)

  const selectAnOption = e => {
    console.log(e.target.id)
    dispatch({
      type: 'OPTION_SELECTED',
      payload: options[e.target.id]
    })
  }

  const reset = () => {
    dispatch({
      type: 'RESET',
    })
  }
  
  useEffect(() => {
    //console.log(machineHand === hand)
    console.log(`rendered`)
    if (machineHand === hand) {
      setWin(null)
      return
    } else if ( hand === 'paper' && machineHand === 'scissors') {
      setScore(score => score - 1);
      setWin(false)
    } else if (hand === 'paper' && machineHand === 'rock') {
      setScore(score => score + 1);
      setWin(true)
    } else if (hand === 'rock' && machineHand === 'scissors') {
      setScore(score => score + 1);
      setWin(true)
    } else if (hand === 'rock' && machineHand === 'paper') {
      setScore(score => score - 1);
      setWin(false)
    } else if (hand === 'scissors' && machineHand === 'paper') {
      setScore(score => score + 1);
      setWin(true)
    } else if (hand === 'scissors' && machineHand === 'rock') {
      setScore(score => score - 1);
      setWin(false)
    }
  }, [change, hand, machineHand, setScore])

  return (
    <div className="App">
      <Header score={score} wait={wait} />
      <Main
       selectAnOption={selectAnOption}
       isLoading={isLoading}
       options={options}
       hand={hand}
       machineHand={machineHand}
       reset={reset}
       change={change}
       wait={wait}
       setWait={setWait}
       win={win}
       getRamdomNumber={getRamdomNumber}
        />
      <Footer resetScore={resetScore} />
    </div>
  );
}

export default App;
