import React from "react";
import Header from "src/Components/Header/Header";
import LeftMenu from "src/Components/LeftMenu/LeftMenu";
import * as S from "./Style";

const index: React.FC = () => {
  return (
    <S.Positioner>
      <S.Header>
        <Header />
      </S.Header>
      <S.Wrapper>
        <S.LeftMenu>
          <LeftMenu />
        </S.LeftMenu>
        <S.Content></S.Content>
        <S.RightMenu></S.RightMenu>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default index;
