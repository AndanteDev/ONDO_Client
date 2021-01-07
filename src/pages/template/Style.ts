import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  border: 3px solid black;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 20vh;

  border: 3px solid #75fbf5;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  border: 3px solid #96d35f;
`;

export const LeftMenu = styled.div`
  width: 20%;
  height: 80vh;

  border: 3px solid #74a7fe;
`;

export const Content = styled.div`
  width: 60%;
  height: 80vh;

  border: 3px solid #e63c7a;
`;

export const RightMenu = styled.div`
  width: 20%;
  height: 80vh;

  border: 3px solid #9829bd;
`;
