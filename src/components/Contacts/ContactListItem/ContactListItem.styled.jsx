import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  width: 450px;
  font-size: 20px;
  border: 2px solid tomato;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 3px rgba(34, 60, 80, 0.4);
  transition: transform 200ms linear;
  cursor: pointer;

  ${(props) => {
    if (props.index % 2 === 0) {
      return "background-color:#dee2f0; margin-left:-10px;";
    }
    return "background-color:#9b9ea8; margin-left:10px;";
  }}

  :hover {
    transform: scale(1.05);
  }
`;
