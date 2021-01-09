import React from "react";
import Content from "src/Components/Content/Content";
import Header from "src/Components/Header/Header";
import LeftMenu from "src/Components/LeftMenu/LeftMenu";
import RightMenu from "src/Components/RightMenu/RightMenu";
import * as S from "./Style";

const titleList = [
  {
    router: "home",
    title: "홈",
  },
  {
    router: "mystory",
    title: "나의 이야기",
  },
  {
    router: "ourstory",
    title: "우리의 이야기",
  },
  {
    router: "nletter",
    title: "N일 뒤의 편지",
  },
  {
    router: "community",
    title: "소통하기",
  },
];

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
        <S.Content>
          <Content />
        </S.Content>
        <S.RightMenu>
          <RightMenu />
        </S.RightMenu>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default index;
