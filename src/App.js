import axios from "axios";
import { useState, useEffect } from "react";
import Students from "./Students";

const App = () => {
  //storing the data to a state from the api call
  const [students, setStudents] = useState([]);
  const [filteredList, setFiltredList] = useState([]);

  //api call to fetch the data from the url
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      setStudents(res.data.students);
      setFiltredList(res.data.students);
    });
  }, []);

  //event to capture the input value change as well as filtering the state values

  const filterChange = (e) => {
    setFiltredList(
      students.filter((student) => {
        return (
          student.firstName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          student.lastName.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );
  };

  //component that renders the content to our app
  return (
    <div>
      <Students studentData={filteredList} onChanges={filterChange} />
    </div>
  );
};

export default App;
