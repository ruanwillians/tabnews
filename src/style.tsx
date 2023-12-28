import React from "react";
import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  darkTheme: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: ${(props) =>
      props.darkTheme ? "rgba(255, 255, 255, 0.87)" : "#213547"};
    background-color: ${(props) => (props.darkTheme ? "#242424" : "#ffffff")};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: ${(props) => (props.darkTheme ? "#646cff" : "#646cff")};
    text-decoration: inherit;

    &:hover {
      color: ${(props) => (props.darkTheme ? "#535bf2" : "#747bff")};
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: ${(props) => (props.darkTheme ? "#213547" : "#213547")};
      background-color: ${(props) => (props.darkTheme ? "#ffffff" : "#ffffff")};
    }

    a:hover {
      color: ${(props) => (props.darkTheme ? "#747bff" : "#747bff")};
    }
  }
`;

interface AppWithGlobalStyleProps {
  children: React.ReactNode;
  darkTheme: boolean;
}

const AppWithGlobalStyle: React.FC<AppWithGlobalStyleProps> = ({
  children,
  darkTheme,
}) => (
  <>
    <GlobalStyle darkTheme={darkTheme} />
    {children}
  </>
);

export default AppWithGlobalStyle;
