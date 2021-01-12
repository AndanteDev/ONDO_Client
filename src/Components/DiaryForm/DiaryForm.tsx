import React, { useState } from "react";
import DiaryPhoto from "src/Components/DiaryPhoto/DiaryPhoto";
import * as S from "./Style";
import { useForm } from "react-hook-form";

interface DiaryFormProps {
  emotion: string;
  submitProps: boolean;
}

const DiaryForm: React.FC<DiaryFormProps> = ({ emotion, submitProps }) => {
  const [isonSubmit, setIsonSubmit] = useState(submitProps);
  const { register, handleSubmit } = useForm();
  return (
    <S.Positioner>
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
    </S.Positioner>
  );
};

export default DiaryForm;
