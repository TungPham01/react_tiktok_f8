import { useRef, useState } from "react";
import Content from "./Content";

function App() {

  const [count, setCount] = useState(60);
  let timerId = useRef()

  const handleStart = () => {
    timerId.current = setInterval(() => (
      setCount(prev => prev - 1)
    ), 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  const h1Ref = useRef()
  console.log(h1Ref.current)
  return (
    <div style={{ padding: 32 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
