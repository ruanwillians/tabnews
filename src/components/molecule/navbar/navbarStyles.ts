// navbarStyles.ts
import styled, { createGlobalStyle } from "styled-components";
interface NavbarProps {
  darkTheme?: boolean;
  open?: boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
`;

export const ThemeContainer = styled.div<NavbarProps>`
  transition: background-color 0.5s;
  background-color: ${(props) => (props.darkTheme ? "#ffffff" : "#333333")};
  color: ${(props) => (props.darkTheme ? "#333333" : "#ffffff")};
`;

export const NavbarContainer = styled.nav<NavbarProps>`
  width: 97vw;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1em;
`;

export const MenuBtn = styled.div<NavbarProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1em;
`;

export const MobileMenu = styled.div<NavbarProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100vw")};
  height: 100vh;
  width: 100%;
  background-color: #333;
  flex-direction: column;
  padding-top: 60px;
  display: flex;
  transition: right 0.5s;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MenuClose = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: -2em 2em 2em 0;
`;

export const MenuItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;
