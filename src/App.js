import { useState } from "react";

function App() {

  const [work, setWork] = useState('');
  const [works, setWorks] = useState(() => {
    const getJobByStorage = JSON.parse(localStorage.getItem('jobs'))

    return getJobByStorage ?? []
  });

  const handleAdd = () => {
    setWorks(prev => {
      const newJobs = [...prev, work]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setWork('')
  };

  return (
    <div style={{ padding: 32 }}>
      <input
        value = {work}
        onChange={(e) => setWork(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
      <ul>
        {works && works.length > 0 &&
          works.map((workItem,index) => {
            return (
              <li key={index}>{workItem}</li>
            )
          })
        }
        </ul>
    </div>
  );
}

export default App;
