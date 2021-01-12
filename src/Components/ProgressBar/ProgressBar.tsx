import React, { useState } from "react";
import * as S from "./Style";

const ProgressBar: React.FC = () => {
  const [percent, setPercent] = useState(36.5);
  return (
    <S.ContainerStyles>
      <S.FillerStyles percent={percent}>
        <S.LabelStyled>{`${percent}%`}</S.LabelStyled>
      </S.FillerStyles>
    </S.ContainerStyles>
  );
};

export default ProgressBar;
