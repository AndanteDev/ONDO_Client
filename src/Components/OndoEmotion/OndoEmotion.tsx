import React from "react";
import * as S from "./Style";
import Image from "next/image";

const OndoEmotion: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <Image src="/ONDO.svg" alt="logo" width={32} height={47} />
        <S.Title>
          감정의 온도
          <br />
          ON : 계속 DO : 하다
        </S.Title>
        <Image src="/Emotions.svg" alt="emotions" width={239} height={41} />
      </S.Wrapper>
    </S.Positioner>
  );
};

export default OndoEmotion;
