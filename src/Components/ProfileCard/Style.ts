import styled from "styled-components";

export const Positioner = styled.div`
  width: 18vw;
  height: 100%;

  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 2vw;

  box-shadow: 0 0.1em 0.1em 0.1em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 100px;
  overflow: hidden;

  margin-top: 5vh;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 55%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5vh;
`;

export const Name = styled.div`
  font-size: 1.3vw;
  font-weight: normal;
  color: #000000;
`;

export const Desc = styled.div`
  font-size: 1vw;
  color: #000000;
  font-weight: 100;
`;
