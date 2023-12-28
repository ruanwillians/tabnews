import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { lighten } from "polished";

interface StyledButtonProps {
  color?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => (props.color ? props.color : "#646cff")};
  color: #ffffff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: border-color 0.25s;

  &:hover {
    border-color: ${(props) =>
      props.color ? lighten(0.2, props.color) : lighten(0.2, "#646cff")};
    background-color: ${(props) =>
      props.color ? lighten(0.1, props.color) : lighten(0.1, "#646cff")};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton color={color} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
