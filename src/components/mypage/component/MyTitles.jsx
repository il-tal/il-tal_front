import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMemberBadges,
  putMainBadge,
  reciveBadges,
} from "../../../api/myAccount";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const MyTitles = (props) => {
  const queryClient = useQueryClient();
  const ownBadge = useQuery(["getOwnBadge"], getMemberBadges);
  const [isAchieve, setIsAchieve] = useState(false);
  const [isAttainment, setIsAttainment] = useState(false);
  useEffect(() => {
    setIsAchieve(false);

    for (let i = 0; i < ownBadge.data?.length; i++) {
      if (ownBadge.data[i].id === Number(props.id)) {
        setIsAchieve(true);
        break;
      }
    }
  }, [ownBadge.data, props.id]);
  useState(() => {
    if (
      props.id === 1 ||
      props.id === 2 ||
      props.id === 3 ||
      props.id === 4 ||
      props.id === 5
    ) {
      if (props.success >= props.badgeGoal) {
        setIsAttainment(true);
      }
    } else if (
      props.id === 6 ||
      props.id === 7 ||
      props.id === 8 ||
      props.id === 9 ||
      props.id === 10
    ) {
      if (props.fail >= props.badgeGoal) {
        setIsAttainment(true);
      }
    }
  });
  const giveBadge = useMutation(
    ({ badgeId: id }) => reciveBadges({ badgeId: id }),
    {
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "칭호가 획득되었습니다.",
          text: "칭호를 확인해보세요.",
          showConfirmButton: false,
          timer: 1000,
        });
        setIsAchieve(true);
        queryClient.invalidateQueries(["getBadges"]);
      },
      onError: () => {
        Swal.fire({
          icon: "error",
          title: "칭호 획득에 실패했습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
      },
    }
  );

  const exhibitBadge = useMutation(
    ({ badgeId: id }) => putMainBadge({ badgeId: id }),
    {
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "칭호가 변경되었습니다.",
          showConfirmButton: true,
          timer: 800,
        });
        queryClient.invalidateQueries(["getMyPage"]);
      },
    }
  );
  const clickBadge = () => {
    if (isAchieve === false) {
      giveBadge.mutate({ badgeId: props.id });
    } else {
      exhibitBadge.mutate({ badgeId: props.id });
    }
  };
  return (
    <TitleBox>
      <AllTitles
        BadgeImg={props.BadgeImg}
        onClick={clickBadge}
        isAchieve={isAchieve}
      />
      {props.BadgeName}
    </TitleBox>
  );
};
export default MyTitles;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const AllTitles = styled.div`
  background-image: url(${(props) => props.BadgeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 144px;
  height: 144px;
  margin: 10px;
  box-shadow: 1px 3px 0 rgb(0, 0, 0, 0.5);
  background-color: #cccccc;
  filter: grayscale(${(props) => (props.isAchieve ? 0 : 1)});
  border-radius: 5rem;
  &:hover {
    border: 2px solid #06c387;
    box-shadow: 0px 4px 15px 1px rgba(6, 195, 135, 0.25);
  }
  &:active {
    filter: brightness(85%);
    width: 148px;
    height: 148px;
    box-shadow: inset -3px -1px 1px -1px rgb(0, 0, 0, 0.5);
  }
`;
