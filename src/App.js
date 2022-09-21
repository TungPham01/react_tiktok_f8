import { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const ADD_JOB = "add_job";
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const DELETE_JOB = "delete_job";
const removeJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      // const newJob = [...state.jobs];
      // newJob.splice(action.payload, 1);

      const newJob = [...state.jobs].filter((job,index) => index !== action.payload)

      newState = {
        ...state,
        jobs: newJob
      };
      break;
    default:
      throw new Error("not action");
  }

  return newState;
};

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
              {job + '' + index}
              <span onClick={() => dispatch(removeJob(index))}> &times;</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
