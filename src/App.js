import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "PHP",
  },
  {
    id: 2,
    name: "JAVA",
  },
  {
    id: 3,
    name: "Python",
  },
];
function App() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleChecked = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => {
        return item !== id;
      }));
    } else {
      setChecked([...checked, id]);
    }
  };

  const handleSubmit = () => {
    console.log({ids: checked})
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
