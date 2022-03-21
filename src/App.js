import axios from "axios";
import { useState, useEffect } from "react";
import Students from "./Students";

const App = () => {
  //storing the data to a state from the api call
  const [students, setStudents] = useState([]);
  const [filteredList, setFiltredList] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  //api call to fetch the data from the url
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      setStudents(res.data.students);
    });
  }, []);

  const filterChange = (e) => {
    setFilteredName(e.target.value);
    setFiltredList(
      students.filter((student) =>
        student.firstName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.log(filteredList);
  };

  //component that renders the content to our app
  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={filterChange} />
      <Students studentData={students} />
    </div>
  );
};

export default App;
