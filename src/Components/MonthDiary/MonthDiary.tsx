import React from "react";
import * as S from "./Style";

interface MonthDiaryProps {
  data: {
    year: string;
    month: string;
  };
}

const MonthDiary: React.FC<MonthDiaryProps> = ({ data }) => {
  return (
    <S.Positioner
      onClick={() => alert(`${data.year}년 ${data.month}월 일기장`)}
    >
      <S.Wrapper>
        <S.Title>
          {data.year}
          <br />
          {data.month}
        </S.Title>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default MonthDiary;
