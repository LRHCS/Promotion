// Libraries
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

// Algorithms
import Calc from "./components/Calc";

// Themes
import themes from "./data/themes";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ThemeSwitcher = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && themes[storedTheme]) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = (selectedTheme) => {
    if (themes[selectedTheme]) {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  };

  return (
    <ThemeProvider
      theme={themes[theme]}
      style={{ margin: "auto", width: "100%" }}
    >
      <Container>
        <ThemeSwitcher onChange={(e) => toggleTheme(e.target.value)}>
          {Object.keys(themes).map((themeName) => (
            <option
              key={themeName}
              value={themeName}
              style={{
                background: themes[themeName].background,
                color: themes[themeName].text,
                borderRadius: "10px",
                height: "7.5px",
              }}
            >
              {themeName}
            </option>
          ))}
        </ThemeSwitcher>
        <Calc />
      </Container>
    </ThemeProvider>
  );
}

export default App;
