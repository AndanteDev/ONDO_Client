import styled from "styled-components";

export const Positioner = styled.div`
  width: 80%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
  border: 3px solid #000000;
  border-radius: 30px;

  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  color: #000000;

  :hover {
    background-color: #000000;
    color: #ffffff;

    transition: all 1s;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 30%;

  margin-left: 10%;
  margin-top: 20%;
`;

export const Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 100;
  font-size: 3vw;
  line-height: 6vh;
`;
