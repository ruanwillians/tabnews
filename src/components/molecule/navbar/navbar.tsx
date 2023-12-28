import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GlobalStyle,
  ThemeContainer,
  NavbarContainer,
  Logo,
  MenuBtn,
  MenuList,
  MenuItem as StyledMenuItem,
  MobileMenu,
  Img,
  MenuClose,
} from "./navbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <ThemeContainer darkTheme={false}>
      <GlobalStyle />
      <NavbarContainer>
        <Logo>Logo</Logo>
        <MenuBtn open={menuOpen} onClick={handleToggleMenu}>
          <MenuIcon />
        </MenuBtn>
        <MobileMenu open={menuOpen}>
          <MenuClose>
            <MenuBtn open={menuOpen} onClick={handleToggleMenu}>
              <CloseIcon color="primary" />
            </MenuBtn>
          </MenuClose>
          <MenuList>
            <StyledMenuItem as={Link} to="/">
              Home
            </StyledMenuItem>
            <StyledMenuItem as={Link} to="/about">
              About
            </StyledMenuItem>
            <StyledMenuItem as={Link} to="/contact">
              Contact
            </StyledMenuItem>
            <Img src="https://www.tabnews.com.br/brand/dark-filled.svg" />
          </MenuList>
        </MobileMenu>
      </NavbarContainer>
    </ThemeContainer>
  );
};

export default Navbar;
