import React from "react";
import DiaryPhoto from "src/Components/DiaryPhoto/DiaryPhoto";
import * as S from "./Style";

interface DiaryCompleteProps {
  emotion: string;
}

const DiaryComplete: React.FC<DiaryCompleteProps> = ({ emotion }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <DiaryPhoto emotion={emotion} />
        <S.Diary>GSM 창의융합 페스티벌에서 꼭 좋은 결과를 얻고싶다.</S.Diary>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default DiaryComplete;
