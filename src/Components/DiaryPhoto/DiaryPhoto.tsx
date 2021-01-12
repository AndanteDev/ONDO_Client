import React, { useState, useEffect } from "react";
import * as S from "./Style";

import Image from "next/image";

const DiaryPhoto: React.FC = ({ emotion }) => {
  const [emoticon, setEmoticon] = useState(emotion);

  useEffect(() => {
    const returnEmoticon = () => {
      switch (emoticon) {
        case "슬퍼요..":
          return (
            <Image
              src="/ReversedEmtions/Sad_Reverse.svg"
              alt="sad"
              width={55}
              height={55}
            />
          );
        case "그럭저럭이에요":
          return (
            <Image
              src="/ReversedEmtions/Soso_Reverse.svg"
              alt="soso"
              width={55}
              height={55}
            />
          );
        case "행복해요!":
          return (
            <Image
              src="/ReversedEmtions/Smile_Reverse.svg"
              alt="smile"
              width={55}
              height={55}
            />
          );
        case "화나요!":
          return (
            <Image
              src="/ReversedEmtions/Angry_Reverse.svg"
              alt="angry"
              width={55}
              height={55}
            />
          );
        case "피곤해요":
          return (
            <Image
              src="/ReversedEmtions/Tired_Reverse.svg"
              alt="tired"
              width={55}
              height={55}
            />
          );
      }
    };

    return () => returnEmoticon();
  });

  return (
    <S.Positioner>
      <S.Photo>
        <Image src="/Camera.svg" alt="camera" width={36} height={36} />
        <span>오늘의 사진을 넣어주세요.</span>
      </S.Photo>
      {emoticon}
    </S.Positioner>
  );
};

export default DiaryPhoto;
