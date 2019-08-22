import styled, { css } from "styled-components";
const ActiveButtonStyle = `
  margin-left:10px;
  background:none;
  border-radius: 5px;
  border:2px solid rgba(175,47,47,0.2);
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;
export const ButtonComponent = styled.button`
  margin-left: 10px;
  border: none;
  background: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:active {
    ${ActiveButtonStyle}
  }
  ${props => (props.isActive ? css`ActiveButtonStyle` : "")}
`;
