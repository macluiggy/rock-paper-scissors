import './App.css';
import { useState, useReducer, useEffect } from 'react';
//components
import Header from './components/Header';
import Main from './components/Main';

const initialState = {
  isLoading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPTION_SELECTED':
      return {
        ...state,
        hand: action.payload,
        isLoading: true,
      }
    case 'MACHINE_OPTION':
      return {
        ...state,
        machineHand: action.payload,
      }

  }
}

function App() {
  const [score, setScore] = useState(12);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {hand, machineHand, isLoading} = state
  const options = ['paper', 'scissors', 'rock'];

  const selectAnOption = e => {
    console.log(e.target.id)
    dispatch({
      type: 'OPTION_SELECTED',
      payload: options[e.target.id]
    })
  }
  useEffect(() => {
    console.log(`rendered`)
  }, [hand])

  return (
    <div className="App">
      <Header score={score} />
      <Main
       selectAnOption={selectAnOption}
       isLoading={isLoading}
       options={options}
       hand={hand}
        />
    </div>
  );
}

export default App;
