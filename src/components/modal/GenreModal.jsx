import Slider from "rc-slider";
import "../../styles/index.css";
import { useState } from "react";
import styled from "styled-components";
import { CTBox } from "../../styles/themeStyle";
import GenreBtn from "../mypage/GenreBtn";
import Tendency from "../mypage/Tendency";
import { Button } from "../shared/Button";
import { editTendency, getMyPage, postTendency } from "../../api/myAccount";
import { useMutation, useQuery } from "@tanstack/react-query";

const GenreModal = (props) => {
  const User = useQuery(["getMyPage"], getMyPage);
  const [genre, setGenre] = useState(props.genrePref);
  const [quest, setQuest] = useState(props.stylePref);
  const [scare, setScare] = useState(props.lessScare);
  const [room, setRoom] = useState(props.roomSize);
  const [lock, setLock] = useState(props.lockStyle);
  const [device, setDevice] = useState(props.device);
  const [interior, setInterior] = useState(props.interior);
  const [activity, setActivity] = useState(props.excitePreference);
  const [jumpscare, setJumpscare] = useState(props.surprise);
  // post 요청
  const postTend = useMutation((tendency) => postTendency(tendency), {
    onSuccess: () => {},
    onError: () => {},
  });
  // put 요청
  const editTend = useMutation((tendency) => editTendency(tendency), {
    onSuccess: () => {},
  });
  const onSubmit = (e) => {
    if (
      User.data.genrePreference === null &&
      User.data.stylePreference === null
    ) {
      postTend.mutate({
        genrePreference: genre.join(" "),
        stylePreference: quest.join(" "),
        lessScare: Number(scare),
        roomSize: Number(room),
        lockStyle: Number(lock),
        device: Number(device),
        interior: Number(interior),
        excitePreference: Number(activity),
        surprise: Number(jumpscare),
      });
    } else {
      editTend.mutate({
        genrePreference: genre.join(" "),
        stylePreference: quest.join(" "),
        lessScare: Number(scare),
        roomSize: Number(room),
        lockStyle: Number(lock),
        device: Number(device),
        interior: Number(interior),
        excitePreference: Number(activity),
        surprise: Number(jumpscare),
      });
    }
  };
  return (
    <GenreBox>
      <CTBox minHeight={`25px`} />
      <CTBox
        size={`20px`}
        margin={`0 0 0 25px`}
        display={`flex`}
        align={`center`}
      >
        선호장르
      </CTBox>
      <TendencyGrid>
        <GenreBtn
          categoryIndex={Tendency.GenreTend}
          state={genre}
          setState={setGenre}
        />
      </TendencyGrid>
      <CTBox
        size={`20px`}
        margin={`15px 0 0 25px`}
        display={`flex`}
        align={`center`}
      >
        선호 문제
      </CTBox>
      <TendencyGrid>
        <GenreBtn
          categoryIndex={Tendency.questTend}
          state={quest}
          setState={setQuest}
        />
      </TendencyGrid>
      <TendencyWrap>
        <TendBox>겁</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "쫄", 5: "탱" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={scare}
            onChange={(e) => setScare(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>방</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "적음", 5: "많음" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={room}
            onChange={(e) => setRoom(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>자물쇠</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "적음", 5: "많음" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={lock}
            onChange={(e) => setLock(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>장치</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "적음", 5: "많음" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            value={device}
            onChange={(e) => setDevice(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>인테리어</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "무관", 5: "중요" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={interior}
            onChange={(e) => setInterior(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>활동성</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "적음", 5: "많음" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={activity}
            onChange={(e) => setActivity(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap>
        <TendBox>삑딱쿵</TendBox>
        <SliderWrap>
          <Slider
            range
            min={1}
            max={5}
            marks={{ 1: "적음", 5: "많음" }}
            step={1}
            defaultValue={[1, 5]}
            allowCross={false}
            pushable
            draggableTrack
            value={jumpscare}
            onChange={(e) => setJumpscare(e)}
          />
        </SliderWrap>
      </TendencyWrap>
      <TendencyWrap justify={`center`} margin={`0 auto`} colums={"1fr"}>
        <Button
          label={"수정완료"}
          width={`300px`}
          height={`60px`}
          margin={`25px 15px 15px 15px`}
          backgroundColor={`#06C387`}
          onClick={onSubmit}
        />
      </TendencyWrap>
    </GenreBox>
  );
};

export default GenreModal;

const GenreBox = styled.form`
  min-width: 600px;
  max-width: 600px;
  min-height: 720px;
  background-color: #eee;
`;

const SliderWrap = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TendencyGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.colums || `repeat(6, 1fr)`};
  min-height: 25px;
  min-width: 100%;
  place-items: center;
  justify-content: ${(props) => props.justify};
  margin: 0 auto;
`;

const TendencyWrap = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.colums || `1fr 10fr`};
  place-items: center;
  min-height: 25px;
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin || `15px`};
  flex-flow: row wrap;
`;

const TendBox = styled.div`
  min-width: 100px;
  max-width: 100px;
`;
