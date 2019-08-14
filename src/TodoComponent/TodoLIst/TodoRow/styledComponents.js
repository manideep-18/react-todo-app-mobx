import styled from "styled-components";
export const TodoRowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
export const CloseIconStyleOnEdit = styled.img`
  margin-top: 15px;
  display: flex;
  height: 30px;
  width: 30px;
`;
export const TodoRowActiveStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const EditInputStyleContainer = styled.div`
  display: flex;
  flex: 1;
  border-bottom: #e1e1e1;
  margin-left: 40px;
`;
export const EditInputText = styled.input`
  display: flex;
  flex: 1;
  color: #4d4d4d;
  height: 50px;
  padding: 18px;
  font-size: 24px;
  border-color: #e1e1e1;
  border-radius: 2px;
`;
export const ActiveDefaultImage = styled.img`
  margin: 5px;
  height: 40px;
  width: 40px;
`;
export const ActiveDefaultText = styled.span`
  /*...*/
`;

export const TodoRowCompletedStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const IconCompletedstyle = styled.img`
  display: flex;
  margin-left: 5px;
  height: 60px;
  width: 60px;
`;
export const TextCompletedStyle = styled.span`
  text-decoration: line-through;
  color: #d9d9d9;
`;
