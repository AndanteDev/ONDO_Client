import React from "react";
import * as S from "./Style";

const TempContainer: React.FC = () => {
  return (
    <S.Positioner>
      <S.Title>현재 개발중인 페이지입니다</S.Title>
      <S.Desc>
        안녕하세요! ONDO 개발팀 Andante입니다.
        <br />
        2021년 ONDO서비스 출시를 위해 개발중입니다. <br />
        여러분들의 많은 성원 감사드리며 좋은 소식으로 찾아뵙겠습니다.
      </S.Desc>
    </S.Positioner>
  );
};

export default TempContainer;
