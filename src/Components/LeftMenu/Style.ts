import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  width: 10vw;
  height: 6vh;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000000;

  margin-bottom: 3vw;

  :hover {
    color: #ffffff;
    background-color: #000000;
    border-radius: 10px;
    transition: all 0.5s;
    fill: #ffffff;

    font-weight: bold;
    overflow: hidden;
  }
`;

export const Title = styled.div`
  margin-left: 0.5vw;
  margin-bottom: 0.3vh;
  font-size: 1vw;
  font-weight: thin;
`;

export const Icon = styled.div`
  margin-left: 1vw;
`;
