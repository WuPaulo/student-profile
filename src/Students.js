import React from "react";

const Students = ({ studentData }) => {
  //average of student grades

  return (
    <div className="students">
      {/* mapping out data from passed prop */}
      {studentData.map((student) => {
        // finding the average of the students score
        let total = 0;
        for (let i = 0; i < student.grades.length; i++) {
          total += parseInt(student.grades[i]);
        }
        const average = (total / student.grades.length).toFixed(2);

        return (
          // returning the students details
          <li className="studentList" key={student.id}>
            <div className="studentPic">
              <img src={student.pic} alt={`display for ${student.firstName}`} />
            </div>
            <div className="studentInfo">
              <h2>{`${student.firstName} ${student.lastName}`}</h2>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>Average: {average}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Students;
