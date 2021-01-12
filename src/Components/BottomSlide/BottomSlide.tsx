import React, { useState } from "react";
import * as S from "./Style";
import Image from "next/image";
import DiaryPhoto from "src/Components/DiaryPhoto/DiaryPhoto";
import { useForm } from "react-hook-form";
import DiaryComplete from "../DiaryComplete/DiaryComplete";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const BottomSlide: React.FC = () => {
  const [height, setHeight] = useState(10);
  const [ishover, setIshover] = useState(false);
  const [isWrite, setIswrite] = useState(false);
  const [emotion, setEmotion] = useState("");
  const [isonSubmit, setIsonSubmit] = useState(false);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [day, setDay] = useState(new Date().getDay());

  const { register, handleSubmit } = useForm();

  const returnDay = () => {
    switch (day) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
    }
  };

  return (
    <>
      {isonSubmit ? (
        <DiaryComplete emotion={emotion} />
      ) : (
        <S.Positioner
          height={height}
          onMouseEnter={() => {
            setHeight(25);
            setIshover(true);
          }}
          onMouseLeave={() => {
            setIshover(false);
            setHeight(10);
            setIswrite(false);
          }}
        >
          <S.Wrapper height={height}>
            <S.Date>
              {year}. {month}. {date}. ({returnDay()})
            </S.Date>
            <S.Desc>
              오늘의 감정온도는 어떠신가요?{" "}
              <span style={{ color: "#faeb78" }}>{emotion}</span>
            </S.Desc>
            {ishover ? (
              <>
                <S.Emotions>
                  <Image
                    src="/ReversedEmtions/Sad_Reverse.svg"
                    alt="sad"
                    width={55}
                    height={55}
                    onClick={() => setEmotion("슬퍼요..")}
                  />
                  <Image
                    src="/ReversedEmtions/Soso_Reverse.svg"
                    alt="soso"
                    width={55}
                    height={55}
                    onClick={() => setEmotion("그럭저럭이에요")}
                  />
                  <Image
                    src="/ReversedEmtions/Smile_Reverse.svg"
                    alt="smile"
                    width={55}
                    height={55}
                    onClick={() => setEmotion("행복해요!")}
                  />
                  <Image
                    src="/ReversedEmtions/Angry_Reverse.svg"
                    alt="angry"
                    width={55}
                    height={55}
                    onClick={() => setEmotion("화나요!")}
                  />
                  <Image
                    src="/ReversedEmtions/Tired_Reverse.svg"
                    alt="tired"
                    width={55}
                    height={55}
                    onClick={() => setEmotion("피곤해요")}
                  />
                </S.Emotions>
                <S.Write
                  onClick={() => {
                    setHeight(80);
                    setIswrite(true);
                  }}
                >
                  글쓰기
                </S.Write>
              </>
            ) : null}
            {isWrite ? (
              <S.WriteDiary>
                <DiaryPhoto emotion={emotion} />
                <form onSubmit={() => setIsonSubmit(true)}>
                  <input
                    className="diary_input"
                    name="content"
                    placeholder="오늘 있었던 이야기를 들려주세요!"
                    ref={register}
                  />

                  <input className="diary_button" type="submit" />
                </form>
              </S.WriteDiary>
            ) : null}
          </S.Wrapper>
        </S.Positioner>
      )}
    </>
  );
};

export default BottomSlide;
