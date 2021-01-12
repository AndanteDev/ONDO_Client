import React from "react";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Positioner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 8%;
  margin-top: 8%;
  margin-right: auto;
`;

export const Desc = styled.div`
  margin-left: auto;
  margin-right: 4%;
  margin-top: 1%;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 100;
  font-size: 2.7vw;
  line-height: 150%;
  text-align: right;

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  width: 80%;
  margin-top: 6%;
  display: flex;
  justify-content: space-between;
`;

export const Emotion = styled.div`
  margin-top: 10%;
  display: flex;
`;

export const Sign = styled.div`
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 1%;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 2vw;
  line-height: 130%;

  text-align: right;

  color: #000000;
`;

const Index: React.FC = () => {
  return (
    <Positioner>
      <Logo>
        <Image src="/LOGO.svg" alt="logo" width={200} height={200} />
      </Logo>
      <Desc>
        오늘 하루는 어땠나요?
        <br />
        오늘의 감정온도를 기록해보세요.
      </Desc>

      <Wrapper>
        <Emotion>
          <Image src="/Emotions.svg" alt="emotions" width={374} height={65} />
        </Emotion>
        <Link href="/home">
          <Sign>로그인 / 회원가입 {">>"}</Sign>
        </Link>
      </Wrapper>
    </Positioner>
  );
};

export default Index;
