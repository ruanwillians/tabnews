// FlexView.tsx
import React from "react";
import styled from "styled-components";

interface FlexViewProps {
  column?: boolean;
  justifyContent?: string; // Aceita qualquer valor válido para justify-content
  alignItems?: string; // Aceita qualquer valor válido para align-items
  children?: React.ReactNode;
}

const StyledFlexView = styled.div<FlexViewProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};

  /* Adicione mais estilos conforme necessário */
`;

const FlexView: React.FC<FlexViewProps> = ({ children, ...rest }) => {
  return <StyledFlexView {...rest}>{children}</StyledFlexView>;
};

export default FlexView;
