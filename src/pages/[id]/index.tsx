import React from "react";
import Template from "src/Components/Template/Template";

import { useRouter } from "next/router";
import HomeContainer from "src/Containers/HomeContainer/HomeContainer";
import MyStoryContainer from "src/Containers/MyStoryContainer/MyStoryContainer";

import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      <Positioner>{renderContentByQueryId(id)}</Positioner>
    </Template>
  );
};

export default index;
