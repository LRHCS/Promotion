import React from "react";
import styled from "styled-components";

const ThemeSwitcherContainer = styled.div`
  height: 1000px;
  margin: auto;
  width: 10%;
  line-height: 900px;
`;

const Select = styled.select`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 5px;
  font-size: 15px;
  box-shadow: 0px 0px 13.8px rgba(0, 0, 0, 0.079),
    0px 0px 33.3px rgba(0, 0, 0, 0.099), 0px 0px 62.6px rgba(0, 0, 0, 0.107),
    0px 0px 111.7px rgba(0, 0, 0, 0.107), 0px 0px 208.9px rgba(0, 0, 0, 0.098),
    0px 0px 500px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
`;

const ThemeSwitcher = ({ themes, selectedTheme, onThemeChange }) => {
  return (
    <ThemeSwitcherContainer>
      <Select
        value={selectedTheme}
        onChange={(e) => onThemeChange(e.target.value)}
      >
        {Object.keys(themes).map((themeName) => (
          <option
            key={themeName}
            value={themeName}
            style={{
              background: themes[themeName].cardBackground,
              color: themes[themeName].text,
            }}
          >
            {themeName}
          </option>
        ))}
      </Select>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
