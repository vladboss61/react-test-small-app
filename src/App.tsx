import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import Test2 from './components/Test2';

function App(): JSX.Element {

  const btnHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
  }
  
  console.log("App function is executed.");

  const [count, setCount] = useState<number>(0);
  const [obj, setObj] = useState<{id: number}>({id: 10});

  console.log("Count: ", count);
  const greeting = Math.random();
  const appHeadCss = "App-header";

  const someHtml = <div>Test</div>
  const someTest = <Test2></Test2>

  return (
    <div className="app">
      <header className={appHeadCss}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
          {someHtml}
          Hello React Application.
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       Obj.Id: {obj.id}
       <div>Count: {count}</div>
       <button className='bnt' onClick={btnHandler}>+1
        </button>
        {someTest}
    </div>
  );
}

export default App;