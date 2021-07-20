import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//components
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [score, setScore] = useState(12)
  return (
    <div className="App">
      <Header score={score} />
      <Main />
    </div>
  );
}

export default App;
