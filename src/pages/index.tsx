import React from "react";
import * as S from "./Style";

import Image from "next/image";

const Index: React.FC = () => {
  return (
    <S.Positioner>
      <S.Logo>
        <Image src="/LOGO.svg" alt="logo" width={200} height={200} />
      </S.Logo>
      <S.Desc>
        오늘 하루는 어땠나요?
        <br />
        오늘의 감정온도를 기록해보세요.
      </S.Desc>

      <S.Wrapper>
        <S.Emotion>
          <Image src="/Emotions.svg" alt="emotions" width={374} height={65} />
        </S.Emotion>
        <S.Sign>로그인 / 회원가입 {">>"}</S.Sign>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Index;
