import React, { useState, useEffect } from "react";
import Header from "src/Components/Header/Header";
import LeftMenu from "src/Components/LeftMenu/LeftMenu";
import RightMenu from "src/Components/RightMenu/RightMenu";
import BottomSlide from "../BottomSlide/BottomSlide";
import * as S from "./Style";

import { useRouter } from "next/router";

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

const Template: React.FC = ({ children }) => {
  const [slide, setSlide] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    switch (id) {
      case "mystory":
        return setSlide(true);
      default:
        return setSlide(false);
    }
  });

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
          {children}
          {slide ? <BottomSlide /> : null}
        </S.Content>
        <S.RightMenu>
          <RightMenu />
        </S.RightMenu>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Template;
