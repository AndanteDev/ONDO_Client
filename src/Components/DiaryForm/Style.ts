import styled from "styled-components";

export const Positioner = styled.div`
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
