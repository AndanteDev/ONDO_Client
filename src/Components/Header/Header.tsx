import React from "react";
import * as S from "./Style";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.Left>
        <S.Logo>
          <Image src="/ONDO.svg" alt="logo" width={60} height={90} />
        </S.Logo>
      </S.Left>
      <S.Middle>
        <span>나의 이야기</span>
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
