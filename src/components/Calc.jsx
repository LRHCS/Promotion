import React, { useState, useEffect } from "react";
import rule from "../rule";
import subjects from "../data/subjects";
import { getColorFromValue } from "./ColorCalc";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  margin: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  flex-basis: 40%;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 35px;
  border-radius: 10px;
  font-size: larger;
`;

const InputGrade = styled.input`
  width: 70%;
  background-color: ${({ theme }) => theme.cardBackground};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  font-size: medium;
  color: ${({ theme }) => theme.text};
`;

const TotalGrade = styled.h1`
  height: 100px;
  background-color: ${({ theme }) => theme.cardBackground};
  font-size: 70px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  border-radius: 0px 0px 10px 0px;
  width: 100%;
`;

const Calc = () => {
  const [grades, setGrades] = useState({});

  // Storage
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
      if (subject === "Philosophie/Religion" || subject === "BG/Music") {
        ruleValue /= 2;
      }
      setGrades((prevGrades) => ({
        ...prevGrades,
        [subject]: {
          grade: parsedGrade,
          ruleValue,
        },
      }));
    } else if (subject === "Informatik" || subject === "Sport") {
      ruleValue = 0;
    } else {
      setGrades((prevGrades) => {
        const updatedGrades = { ...prevGrades };
        delete updatedGrades[subject];
        return updatedGrades;
      });
    }
  }

  return (
    <div>
      <TotalGradeCalculator grades={grades} />
      <GradeCalculator grades={grades} handleGradeChange={handleGradeChange} />
    </div>
  );
};

const GradeCalculator = ({ grades, handleGradeChange }) => {
  return (
    <div className="flex-container">
      {subjects.map((subject) => (
        <StyledDiv key={subject.name}>
          <h3>{subject.name}</h3>
          <div className="grade">
            <InputGrade
              type="text"
              value={grades[subject.name]?.grade || ""}
              onChange={(e) => handleGradeChange(subject.name, e.target.value)}
              style={{ color: "white" }}
            />
            {"  >  "}
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
        </StyledDiv>
      ))}
    </div>
  );
};

const TotalGradeCalculator = ({ grades }) => {
  function calculateTotalPoints(grades) {
    let totalPoints = 0;
    for (const grade of Object.values(grades)) {
      totalPoints += grade.ruleValue;
    }
    return totalPoints;
  }

  return (
    <TotalGrade
      className="main"
      style={{
        color: getColorFromValue(
          calculateTotalPoints(Object.values(grades || {}))
        ),
      }}
    >
      {calculateTotalPoints(Object.values(grades || {}))}
    </TotalGrade>
  );
};

export default Calc;
