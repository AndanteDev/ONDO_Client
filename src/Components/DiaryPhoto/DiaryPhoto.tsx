import React, { useState } from "react";
import * as S from "./Style";

import Image from "next/image";

interface DiaryPhotoProps {
  emotion: string;
}

const returnEmoticon = (emotion: string) => {
  switch (emotion) {
    case "슬퍼요..":
      return <Image src="/Emotions/Sad.svg" alt="sad" width={55} height={55} />;
    case "그럭저럭이에요":
      return (
        <Image src="/Emotions/Soso.svg" alt="soso" width={55} height={55} />
      );
    case "행복해요!":
      return (
        <Image src="/Emotions/Smile.svg" alt="smile" width={55} height={55} />
      );
    case "화나요!":
      return (
        <Image src="/Emotions/Angry.svg" alt="angry" width={55} height={55} />
      );
    case "피곤해요":
      return (
        <Image src="/Emotions/Tired.svg" alt="tired" width={55} height={55} />
      );
  }
};

const DiaryPhoto: React.FC<DiaryPhotoProps> = ({ emotion }) => {
  console.log(emotion);
  return (
    <S.Positioner>
      <S.Photo>
        <Image src="/Camera.svg" alt="camera" width={36} height={36} />
        <span>오늘의 사진을 넣어주세요.</span>
      </S.Photo>
      {returnEmoticon(emotion)}
    </S.Positioner>
  );
};

export default DiaryPhoto;
