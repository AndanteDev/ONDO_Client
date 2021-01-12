import styled from "styled-components";

export const ContainerStyles = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #e0e0de;
  border-radius: 2vw;
  margin-top: 4vh;
`;

export const FillerStyles = styled.div`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: #b5d2d1;
  text-align: "right";
  border-radius: inherit;
  transition: width 0.2s ease-inherit;

  display: flex;
  align-items: center;
`;

export const LabelStyled = styled.span`
  padding: 5px;
  color: #ffffff;
  font-weight: bold;
  margin-left: auto;
`;
