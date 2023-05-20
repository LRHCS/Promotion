import React, { useState, useEffect } from "react";
import rule from "../rule";
import subjects from "../data/subjects";
import { getColorFromValue } from "./ColorCalc";
import styled from "styled-components";
import { ask, message } from "@tauri-apps/api/dialog";

// Styled Components
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
  box-shadow: 0px 0px 26.3px rgba(0, 0, 0, 0.024),
    0px 0px 29px rgba(0, 0, 0, 0.047), 0px 0px 27.8px rgba(0, 0, 0, 0.072),
    0px 0px 25px rgba(0, 0, 0, 0.1);
`;

const InputGrade = styled.input`
  width: 50%;
  background-color: ${({ theme }) => theme.cardBackground};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  font-size: medium;
  color: ${({ theme }) => theme.text};
  align-text: center;
  margin: auto;
  text-align: center;
  padding-right: 5px;
`;

const TotalGrade = styled.h1`
  height: 100px;
  background-color: ${({ theme }) => theme.cardBackground};
  font-size: 70px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  box-shadow: 0px 19.7px 29px rgba(0, 0, 0, 0.048),
    0px 43px 25px rgba(0, 0, 0, 0.1);
`;

const Button_File_Change = styled.button`
  background-color: ${({ theme }) => theme.cardBackground};
  border: none;
  color: ${({ theme }) => theme.text};
  margin-right: 20px;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.07);
`;

const Import_Input = styled.input`
  display: none;
`;

const Label = styled.label`
  background-color: ${({ theme }) => theme.cardBackground};
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  font-weight: bold;
  margin: 0px 20px 0px 0px;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.07);
`;

const Calc = () => {
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

  const handleGradeChange = (subject, grade) => {
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
  };

  //Import, Reset, Export
  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const importedGrades = JSON.parse(e.target.result);
        setGrades(importedGrades);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
      }
    };

    reader.readAsText(file);
  };

  async function handleReset() {
    const confirmed = await ask("Reset?", "Confirm");

    if (confirmed) {
      setGrades({});
    }
  }

  async function exportGrades() {
    const storedGrades = localStorage.getItem("grades");
    if (storedGrades) {
      const gradesJson = JSON.stringify(JSON.parse(storedGrades), null, 2);
      const blob = new Blob([gradesJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "grades.json";
      link.click();
      URL.revokeObjectURL(url);
      await message(`Downloads/${link.download}`, "Path to Download");
    }
  }

  return (
    <div>
      <TotalGradeCalculator grades={grades} />

      <div className="flex-container" style={{ marginTop: "10px" }}>
        <Button_File_Change onClick={exportGrades}>Export</Button_File_Change>
        <Import_Input type="file" id="json" onChange={handleImport} />
        <Label htmlFor="json">Upload</Label>
        <Button_File_Change onClick={handleReset}>Reset</Button_File_Change>
      </div>

      <div className="flex-container">
        {subjects.map((subject) => (
          <StyledDiv key={subject.name}>
            <h3>{subject.name}</h3>
            <div className="grade">
              <InputGrade
                type="text"
                value={grades[subject.name]?.grade || ""}
                onChange={(e) =>
                  handleGradeChange(subject.name, e.target.value)
                }
              />
              {" > "}
              {grades[subject.name] && grades[subject.name].ruleValue !== 0 ? (
                <b>
                  <span
                    style={{
                      color: getColorFromValue(grades[subject.name].ruleValue),
                      marginLeft: "5px",
                    }}
                  >
                    {grades[subject.name].ruleValue}
                  </span>
                </b>
              ) : (
                0
              )}
            </div>
          </StyledDiv>
        ))}
      </div>
    </div>
  );
};

const TotalGradeCalculator = ({ grades }) => {
  const calculateTotalPoints = (grades) => {
    let totalPoints = 0;
    for (const grade of Object.values(grades)) {
      totalPoints += grade.ruleValue;
    }
    return totalPoints;
  };

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
