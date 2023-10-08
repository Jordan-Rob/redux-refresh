import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy())
  }

  console.log(counter)

  return (
    <div>
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>AddBy 10</button>
    </div>
  );
}

export default App;
