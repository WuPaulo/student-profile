import axios from "axios";
import { useState, useEffect } from "react";
import Students from "./Students";

const App = () => {
  //storing the data to a state from the api call
  const [students, setStudents] = useState([]);

  //api call to fetch the data from the url
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      setStudents(res.data.students);
    });
  }, []);

  //component that renders the content to our app
  return (
    <div>
      <Students studentData={students} />
    </div>
  );
};

export default App;
