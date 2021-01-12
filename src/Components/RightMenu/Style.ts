import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  transition: 0.5s;
`;

export const Wrapper = styled.div`
  width: 76%;
  height: 50vh;
`;

export const Ondo = styled.div`
  width: 100%;
  height: 15vh;

  background: linear-gradient(
    90deg,
    rgba(230, 230, 255, 0.51) 0%,
    rgba(255, 213, 204, 0.59) 100%
  );
  border-radius: 10px;

  margin-top: 3vh;

  display: flex;
  flex-direction: column;
`;

export const Ondo_Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 100;
  font-size: 1.2vw;
  line-height: 22px;
  /* identical to box height */

  color: #000000;

  margin: 3vh 0 0 3vh;
`;

export const Ondo_Temp = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 100;
  font-size: 2.5vw;
  line-height: 48px;
  /* identical to box height */

  color: #000000;

  margin: 3vh 0 10vh 15vh;
`;
