import styled from "styled-components";

export const Positioner = styled.div`
  width: 60%;
  height: 80vh;

  background-color: #000000;
  border-top-left-radius: 3vw;
  border-top-right-radius: 3vw;
  position: absolute;
  bottom: 0;
  right: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  transition: all 1s;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 65%;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Diary = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  color: #ffffff;
`;
