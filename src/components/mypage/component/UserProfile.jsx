import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { editNickName } from "../../../api/myAccount";
import ProgressBar from "../../../utils/progressBar";
import setting from "../../../asset/img/settings.png";
import * as Styled from "../StyledInfo";
import Swal from "sweetalert2";

const UserProfile = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [nameEdit, setNameEdit] = useState("");
  const queryClient = useQueryClient();
  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    setNameEdit({ ...nameEdit, [name]: value });
  };
  const postNick = useMutation(
    ({ nickname: userNick }) => editNickName(userNick),
    {
      onSuccess: () => {
        setIsEdit(false);
        queryClient.invalidateQueries(["getMyPage"]);
      },
      onError: (error) => {
        if (error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "닉네임이 중복됩니다.",
            text: "다른 닉네임을 입력해주세요.",
          });
        }
      },
    }
  );
  const onSubmit = () => {
    if (
      nameEdit.nickname === "" ||
      nameEdit.nickname === undefined ||
      nameEdit.nickname === null
    ) {
      Swal.fire({
        icon: "error",
        title: "닉네임을 입력해주세요.",
        text: "닉네임칸은 비워둘수 없습니다.",
      });
    } else if (nameEdit.nickname.length > 8 || nameEdit.nickname.length < 2) {
      Swal.fire({
        icon: "error",
        title: "닉네임은 2~8자리로 입력해주세요.",
        text: "변경할 닉네임을 다시 입력해주세요.",
      });
    } else if (nameEdit.nickname === props.User.nickname) {
      Swal.fire({
        icon: "error",
        title: "닉네임이 같습니다.",
        text: "변경할 닉네임을 다시 입력해주세요.",
      });
    } else {
      postNick.mutate({ nickname: nameEdit });
    }
  };
  return (
    <Styled.UserNameBox>
      <Styled.MainTitle
        BadgeImg={props.isLoading ? "" : props.User.mainBadgeImg}
      />
      <Styled.UserEdit>
        {isEdit ? (
          <img src={setting} alt="setting" onClick={onSubmit} />
        ) : (
          <img
            src={setting}
            alt="setting"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />
        )}
      </Styled.UserEdit>
      <Styled.UserTitles width={`170px`}>
        <span>{props.isLoading ? "" : props.User.mainBadgeName}</span>
      </Styled.UserTitles>
      {isEdit ? (
        <Styled.NameEditDiv>
          <Styled.NameEditForm>
            <Styled.NameEdit
              name="nickname"
              value={nameEdit.nickname}
              onChange={onChangeEdit}
              onKeyPress={(e) => {
                e.preventDefault();
              }}
            ></Styled.NameEdit>
          </Styled.NameEditForm>
          <button className="name-edit-btn" onClick={onSubmit}>
            확인
          </button>
          <button
            className="name-edit-btn"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            취소
          </button>
        </Styled.NameEditDiv>
      ) : (
        <Styled.UserName>
          {props.isLoading ? "" : props.User.nickname}{" "}
          <div className="user-id">
            {sessionStorage.getItem("userinfo") === null
              ? ""
              : JSON.parse(sessionStorage.getItem("userinfo")).username}
          </div>
        </Styled.UserName>
      )}
      <ProgressBar
        completed={props.achieveLoading ? 0 : props.achieve.achieveBadgeCnt}
        goal={10}
        height={`2rem`}
        width={`95%`}
        shadow={`0`}
      />
    </Styled.UserNameBox>
  );
};

export default UserProfile;
