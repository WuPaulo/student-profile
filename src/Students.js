import React from "react";

const Students = ({ studentData }) => {
  return (
    <div className="students">
      {/* mapping out data from passed prop */}
      {studentData.map((student) => {
        return (
          <li className="studentList" key={student.id}>
            <div className="studentPic">
              <img src={student.pic} alt={`display for ${student.firstName}`} />
            </div>
            <div className="studentInfo">
              <h2>{`${student.firstName} ${student.lastName}`}</h2>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>Average: {student.grades}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Students;
