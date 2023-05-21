import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import themes from "../data/themes";
import styled from "styled-components";

const Page = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100%;
`;

const ThemePage = ({ selectedTheme, onThemeChange }) => {
  return (
    <Page>
      <ThemeSwitcher
        themes={themes}
        selectedTheme={selectedTheme}
        onThemeChange={onThemeChange}
      />
    </Page>
  );
};

export default ThemePage;
