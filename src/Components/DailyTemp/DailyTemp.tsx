import React, { useState } from "react";
import ProgressBar from "src/Components/ProgressBar/ProgressBar";
import * as S from "./Style";

const DailyTemp: React.FC = () => {
  const [completed] = useState(36.5);

  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Title>오늘의 감정온도</S.Title>
        <ProgressBar completed={completed}>70%</ProgressBar>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default DailyTemp;
