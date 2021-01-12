import React from "react";
import Template from "src/Components/Template/Template";
import * as S from "./Style";

import { useRouter } from "next/router";
import HomeContainer from "src/Containers/HomeContainer/HomeContainer";
import MyStoryContainer from "src/Containers/MyStoryContainer/MyStoryContainer";

const renderContentByQueryId = (id) => {
  switch (id) {
    case "home":
      return <HomeContainer />;
    case "mystory":
      return <MyStoryContainer />;
  }
};

const index: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Template>
      <S.Positioner>{renderContentByQueryId(id)}</S.Positioner>
    </Template>
  );
};

export default index;
