import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, removeJob } from "./action";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const inputJob = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputJob.current.focus();
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Todo</h1>
      <input
        ref={inputJob}
        placeholder="Enter todo..."
        value={job}
        onChange={(event) => dispatch(setJob(event.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs &&
          jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(removeJob(index))}> &times;</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
