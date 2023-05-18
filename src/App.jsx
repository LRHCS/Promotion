import React, { useState, useEffect } from "react";
import rule from "./rule";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";

const subjects = [
  {
    name: "Biologie",
  },
  {
    name: "BG/Music",
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
    name: "Philosophie/Religion",
  },
  {
    name: "sM",
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appStyle = {
    backgroundColor: isDarkMode ? "#1f1f1f" : "azure",
    color: isDarkMode ? "#f8f8f8" : "#333",
  };
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
    const parsedGrade = grade;
    if (!isNaN(parsedGrade)) {
      let ruleValue = rule(parsedGrade) || 0;
      if (subject === "Informatik" || subject === "BG/Music") {
        ruleValue /= 2;
      }
      setGrades((prevGrades) => ({
        ...prevGrades,
        [subject]: {
          grade: parsedGrade,
          ruleValue,
        },
      }));
    } else {
      setGrades((prevGrades) => {
        const updatedGrades = { ...prevGrades };
        delete updatedGrades[subject];
        return updatedGrades;
      });
    }
  }
  function getColorFromValue(value) {
    if (value === 2) {
      return "green";
    } else if (value >= 1.5) {
      return "lime";
    } else if (value >= 1) {
      return "orange";
    } else if (value >= 0.5) {
      return "goldenrod";
    } else if (value >= 0) {
      return "orangered";
    } else {
      return "red";
    }
  }

  function getColorFromTotalValue(value) {
    if (value >= 2) {
      return "green";
    } else if (value >= 1.5) {
      return "lime";
    } else if (value >= 1) {
      return "orange";
    } else if (value >= 0.5) {
      return "goldenrod";
    } else if (value >= 0) {
      return "orangered";
    } else {
      return "red";
    }
  }

  return (
    <div className="page" style={appStyle}>
      <h1
        className="main"
        style={{
          color: getColorFromTotalValue(
            calculateTotalPoints(Object.values(grades))
          ),
        }}
      >
        {calculateTotalPoints(Object.values(grades))}
      </h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <BsFillSunFill className="icon" />
        ) : (
          <BsFillMoonFill className="icon" />
        )}
      </button>
      <div className="flex-container">
        {subjects.map((subject) => (
          <div className="element" key={subject.name}>
            <h3>{subject.name}</h3>
            <div className="grade">
              <input
                className="input_grade"
                type="text"
                value={grades[subject.name]?.grade || ""}
                onChange={(e) =>
                  handleGradeChange(subject.name, e.target.value)
                }
              />
              {" > "}
              {grades[subject.name] && grades[subject.name].ruleValue !== 0 ? (
                <span
                  style={{
                    color: getColorFromValue(grades[subject.name].ruleValue),
                  }}
                >
                  {grades[subject.name].ruleValue}
                </span>
              ) : (
                0
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
