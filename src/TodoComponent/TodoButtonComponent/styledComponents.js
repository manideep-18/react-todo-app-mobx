import styled, { css } from "styled-components";
export const TodoBottonComponentBg = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  padding: 18px;
  background: white;
`;
export const ActiveListItems = styled.div`
  margin-left: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const ActiveListItemsText = styled.span`
  color: #777777;
  font-size: 14px;
  text-align: center;
`;
export const ButtonsListComponent = styled.div`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: center;
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
