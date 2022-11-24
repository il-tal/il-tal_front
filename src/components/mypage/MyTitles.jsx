import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { putMainBadge, reciveBadges } from "../../api/myAccount";

const MyTitles = (props) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(props.id);
  const giveBadge = useMutation(
    ({ badgeId: id }) => reciveBadges({ badgeId: id }),
    {
      onSuccess: () => {
        alert("칭호 획득 완료");
        queryClient.invalidateQueries(["getMyPage"]);
      },
    }
  );
  const exhibitBadge = useMutation(
    ({ badgeId: id }) => putMainBadge({ badgeId: id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getMyPage"]);
      },
    }
  );
  return (
    <TitleBox
      onClick={() => {
        props.isBadge
          ? giveBadge.mutate({ badgeId: props.id })
          : exhibitBadge.mutate({ badgeId: props.id });
      }}
    >
      <AllTitles BadgeImg={props.BadgeImg} />
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
  width: 8rem;
  height: 8rem;
  margin: 10px;
  background-color: #ababab;
  border-radius: 5rem;
  &:hover {
  }
`;
