import React from "react";
import { ask, message } from "@tauri-apps/api/dialog";
import styled from "styled-components";

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

const GradesActions = ({ exportGrades, handleImport, handleReset }) => {
  async function handleExport() {
    await exportGrades();
  }

  async function handleResetConfirmation() {
    const confirmed = await ask("Reset?", "Confirm");

    if (confirmed) {
      handleReset();
    }
  }

  return (
    <div className="flex-container" style={{ marginTop: "10px" }}>
      <Button_File_Change onClick={handleExport}>Export</Button_File_Change>
      <Import_Input type="file" id="json" onChange={handleImport} />
      <Label htmlFor="json">Upload</Label>
      <Button_File_Change onClick={handleResetConfirmation}>
        Reset
      </Button_File_Change>
    </div>
  );
};

export default GradesActions;
