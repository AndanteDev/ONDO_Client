import React from "react";
import * as S from "./Style";
import Image from "next/image";

const ProfileCard: React.FC = () => {
  return (
    <S.Positioner>
      <S.ProfilePicture>
        <Image src="/Sohee.png" alt="sohee" width={170} height={170} />
      </S.ProfilePicture>
      <S.Wrapper>
        <S.Name>소희님,</S.Name>
        <S.Desc>오늘도 이야기 들려주실거죠?</S.Desc>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default ProfileCard;
