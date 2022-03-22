import React from "react";
import { useState } from "react";

const Students = ({ studentData, onChanges }) => {
  const [infoButton, setInfoButton] = useState(false);

  const showInfo = (studentSelected) => {
    console.log(studentSelected);
    setInfoButton(!infoButton);
  };

  return (
    <div className="students">
      <input type="text" placeholder="Search by name" onChange={onChanges} />
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
          <>
            <li className="studentList" key={student.id}>
              <div className="studentPic">
                <img
                  src={student.pic}
                  alt={`display for ${student.firstName}`}
                />
              </div>
              <div className="studentInfo">
                <h2>{`${student.firstName} ${student.lastName}`}</h2>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average}</p>
              </div>
              {infoButton ? (
                <div className="infoButton">
                  <button className="btn" onClick={() => showInfo(student)}>
                    &#8722;
                  </button>
                </div>
              ) : (
                <div className="infoButton">
                  <button className="btn" onClick={() => showInfo(student)}>
                    &#43;
                  </button>
                </div>
              )}
              <div>{infoButton ? <h2>hi</h2> : null}</div>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default Students;
