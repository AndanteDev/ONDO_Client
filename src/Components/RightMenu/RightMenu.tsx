import React, { useState } from "react";
import * as S from "./Style";

import Calendar from "react-calendar";

const RightMenu: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <S.Positioner>
      <S.Wrapper>
        <Calendar onChange={onChange} value={value} />
        <S.Ondo>
          <S.Ondo_Title>오늘의 온도</S.Ondo_Title>
          <S.Ondo_Temp>36.5℃</S.Ondo_Temp>
        </S.Ondo>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default RightMenu;
