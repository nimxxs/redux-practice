import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from './redux/component/Box'

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload: {num:5}});
    // setCount(count + 1);
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id:"noona", password:"123"}})
  }
  const decrement = () => {
    dispatch({type: "DECREMENT", payload: {num:5}})
  }

  return (
    <div>
      <h1>{id} {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrement}>감소!</button>
      <Box />
    </div>
  );
}

export default App;
