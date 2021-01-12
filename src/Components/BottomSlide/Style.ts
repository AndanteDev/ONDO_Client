import styled from "styled-components";

export const Positioner = styled.div`
  width: 60%;
  height: ${({ height }) => height}vh;

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

  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  height: ${({ height }) => height}vh;
  margin-top: 2vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Date = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 100;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
`;

export const Desc = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 1vw;
  margin-top: 2.1vh;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Emotions = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1vh;
  img {
    cursor: pointer;

    :visited {
      fill: #fee8e5;
    }
  }
`;

export const Write = styled.div`
  width: 5vw;
  height: 3vh;
  border-radius: 1vw;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;

  cursor: pointer;

  color: #000000;
  font-weight: bold;

  :hover {
    box-shadow: inset 0px 6px 6px rgba(0, 0, 0.5, 0.7);
  }
`;

export const WriteDiary = styled.div`
  width: 100%;
  height: 65%;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;
    word-break: break-all;
  }

  .diary_input {
    width: 30vw;
    height: 30vh;
    padding: 1vw;
    border-radius: 2vw;

    table-layout: fixed;
    word-break: break-all;
    font-size: 1vw;
    color: #000000;
    outline: none;
    text-decoration: none;
  }

  .diary_button {
    width: 30vw;
    height: 5vh;

    margin-top: 2vh;
    border-radius: 1vw;
    outline: none;

    cursor: pointer;

    font-weight: bold;
    font-size: 1.2vw;
    color: #000000;

    background-color: #ffffff;
  }
`;
