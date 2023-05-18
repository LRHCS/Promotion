/* import { useState } from "react";
import "./App.css";
import rule from "./rule";
function App() {
  const data = [
    {
      name: "Biologie",
    },
    {
      name: "BG",
    },
    {
      name: "Chemie",
    },
    {
      name: "Deutsch",
    },
    {
      name: "Englisch",
    },
    {
      name: "EW",
    },
    {
      name: "Französisch",
    },
    {
      name: "Geschichte",
    },
    {
      name: "Geografie",
    },
    {
      name: "Informatik",
    },
    {
      name: "Mathematik",
    },
    {
      name: "Physik",
    },
    {
      name: "Philosophie",
    },
    {
      name: "sM",
    },
    {
      name: "Sport",
    },
  ];

  function points() {
    let num = 0;
    const plus_point = data.map((notes) => (num += rule(notes.note)));
    return num;
  }

  function List() {
    const [note, setNote] = useState();
    const noteList = data.map((notes) => (
      <div className="element" key={notes.name.toLowerCase()}>
        <p>{notes.name}</p>
        <p>
          {<input type="text" onChange={(e) => setNote(e.target.value)} />}
          {" > "} {rule(note)}
        </p>
      </div>
    ));
    return noteList;
  }

  return (
    <div>
      <div className="flex-container">
        <div className="main">Your Point : {points()}</div>
        {List()}
      </div>
    </div>
  );
}

export default App;
 */

import React, { useState, useEffect } from "react";
import "./App.css";
import rule from "./rule";

const subjects = [
  {
    name: "Biologie",
  },
  {
    name: "BG",
  },
  {
    name: "Chemie",
  },
  {
    name: "Deutsch",
  },
  {
    name: "Englisch",
  },
  {
    name: "EW",
  },
  {
    name: "Französisch",
  },
  {
    name: "Geschichte",
  },
  {
    name: "Geografie",
  },
  {
    name: "Informatik",
  },
  {
    name: "Mathematik",
  },
  {
    name: "Physik",
  },
  {
    name: "Philosophie",
  },
  {
    name: "sM",
  },
  {
    name: "Sport",
  },
];

function calculateTotalPoints(grades) {
  let totalPoints = 0;
  for (const grade of grades) {
    totalPoints += grade.ruleValue;
  }
  return totalPoints;
}

function App() {
  const [grades, setGrades] = useState({});

  useEffect(() => {
    const storedGrades = localStorage.getItem("grades");
    if (storedGrades) {
      setGrades(JSON.parse(storedGrades));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(grades));
  }, [grades]);

  function handleGradeChange(subject, grade) {
    const ruleValue = rule(grade) || 0;
    setGrades((prevGrades) => ({
      ...prevGrades,
      [subject]: {
        grade,
        ruleValue,
      },
    }));
  }

  return (
    <div>
      <div className="flex-container">
        <div className="main">
          Your Point: {calculateTotalPoints(Object.values(grades))}
        </div>
        {subjects.map((subject) => (
          <div className="element" key={subject.name.toLowerCase()}>
            <p>{subject.name}</p>
            <p>
              <input
                type="text"
                value={grades[subject.name]?.grade || ""}
                onChange={(e) =>
                  handleGradeChange(subject.name, parseFloat(e.target.value))
                }
              />
              {" > "}
              {grades[subject.name] && grades[subject.name].ruleValue !== 0
                ? grades[subject.name].ruleValue
                : 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
