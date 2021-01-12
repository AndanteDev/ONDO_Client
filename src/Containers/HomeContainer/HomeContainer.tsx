import React from "react";
import DailyTemp from "src/Components/DailyTemp/DailyTemp";
import OndoEmotion from "src/Components/OndoEmotion/OndoEmotion";
import OndoGraph from "src/Components/OndoGraph/OndoGraph";
import ProfileCard from "src/Components/ProfileCard/ProfileCard";
import * as S from "./Style";

const HomeContainer: React.FC = () => {
  return (
    <S.Positioner>
      <ProfileCard />
      <S.Ondo>
        <S.Desc>
          <DailyTemp />
          <OndoEmotion />
        </S.Desc>
        <OndoGraph />
      </S.Ondo>
    </S.Positioner>
  );
};

export default HomeContainer;
