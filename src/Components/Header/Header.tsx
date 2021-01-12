import React from "react";
import * as S from "./Style";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const returnTitle = (id) => {
  switch (id) {
    case "home":
      return "홈";
    case "mystory":
      return "나의 이야기";
    case "ourstory":
      return "우리의 이야기";
    case "nletter":
      return "N일 뒤의 편지";
    case "community":
      return "소통하기";
    case "template":
      return "This is Template";
  }
};

const Header: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.Positioner>
      <S.Left>
        <Link href="/">
          <S.Logo>
            <Image src="/ONDO.svg" alt="logo" width={60} height={90} />
          </S.Logo>
        </Link>
      </S.Left>
      <S.Middle>
        <span>{returnTitle(id)}</span>
      </S.Middle>
      <S.Right>
        <S.RightImage>
          <Image src="/Alarm.svg" alt="alarm" width={27.6} height={30} />
        </S.RightImage>
      </S.Right>
    </S.Positioner>
  );
};

export default Header;
