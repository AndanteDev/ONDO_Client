import React from "react";
import MonthDiary from "src/Components/MonthDiary/MonthDiary";
import * as S from "./Style";

const monthList: Array<{ year: string; month: string }> = [
  {
    year: "2020",
    month: "11",
  },
  {
    year: "2020",
    month: "12",
  },
  {
    year: "2021",
    month: "01",
  },
];

const mappingMonthDiary = () =>
  monthList.map((item, idx) => <MonthDiary data={item} key={idx} />);

const MyStoryContainer: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>{mappingMonthDiary()}</S.Wrapper>
    </S.Positioner>
  );
};

export default MyStoryContainer;
