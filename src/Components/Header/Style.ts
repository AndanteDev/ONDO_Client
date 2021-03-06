import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 20vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 3vh;
  cursor: pointer;
`;

export const Middle = styled.div`
  width: 60vw;
  height: 100%;

  display: flex;
  align-items: center;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 2.6vw;
  line-height: 60px;
  color: #000000;

  span {
    margin-top: 3vw;
  }
`;

export const Right = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightImage = styled.div`
  margin: 0 12% 1vh auto;

  cursor: pointer;
`;
