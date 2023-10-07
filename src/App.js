import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: "INCREMENT" })
  }
  const decrement = () => {
    dispatch({ type:"DECREMENT" })
  }

  console.log(counter)

  return (
    <div>
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
