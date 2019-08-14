import styled, { css } from "styled-components";
export const TodoBottomComponent = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  padding: 18px;
  background: white;
`;
export const ActiveListItems = styled.div`
  marginleft: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const ActiveListItemsText = styled.span`
  color: #777777;
  fontsize: 14px;
  textalign: center;
`;
export const ButtonsListComponent = styled.div`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: center;
`;
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
export const AllButtonComponent = styled.button`
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
  ${props => (props.listType === "All" ? css`ActiveButtonStyle` : "")}
`;
export const ActiveButtonComponent = styled.button`
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
  ${props => (props.listType === "Active" ? css`ActiveButtonStyle` : "")}
`;
export const CompletedButtonComponent = styled.button`
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
  ${props => (props.listType === "Completed" ? css`ActiveButtonStyle` : "")}
`;
export const ClearCompletedComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ClearCompletedButton = styled.button`
  display: flex;
  flex: 1;
  border: none;
  background: none;
  text-align: center;
`;
