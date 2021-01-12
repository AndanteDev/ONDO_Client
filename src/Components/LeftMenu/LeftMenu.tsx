import React from "react";
import * as S from "./Style";
import Image from "next/image";
import Link from "next/link";

const menuList = [
  {
    title: "홈",
    image: <Image src="/Home.svg" alt="home" width={33} height={33} />,
    router: "home",
  },
  {
    title: "나의 이야기",
    image: <Image src="/Story.svg" alt="story" width={33} height={33} />,
    router: "mystory",
  },
  {
    title: "우리의 이야기",
    image: <Image src="/Group.svg" alt="ourstory" width={33} height={33} />,
    router: "ourstory",
  },
  {
    title: "N일 뒤의 편지",
    image: <Image src="/Arrow.svg" alt="letter" width={33} height={33} />,
    router: "nletter",
  },
  {
    title: "소통하기",
    image: (
      <Image src="/Community.svg" alt="communication" width={33} height={33} />
    ),
    router: "community",
  },
];

const LeftMenu: React.FC = () => {
  const mappingMenuList = menuList.map((data, idx) => (
    <Link href="/[id]" as={`/${data.router}`}>
      <S.Button key={idx} style={{ textDecoration: "none" }}>
        <S.Icon>{data.image}</S.Icon>
        <S.Title>{data.title}</S.Title>
      </S.Button>
    </Link>
  ));

  return (
    <S.Positioner>
      <S.Wrapper>{mappingMenuList}</S.Wrapper>
    </S.Positioner>
  );
};

export default LeftMenu;
