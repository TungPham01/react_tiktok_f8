import { useReducer } from "react";

const initState = 0

const UP_ACTION = 'UP'
const DOWN_ACTION = 'DOWN'

const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1
      case DOWN_ACTION:
        return state - 1
      default:
        throw new Error('not action')
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >UP</button>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
       >DOWN</button>
    </div>
  );
}

export default App;
