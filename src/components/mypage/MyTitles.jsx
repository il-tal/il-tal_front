import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putMainBadge, reciveBadges } from "../../api/myAccount";

const MyTitles = (props) => {
  const queryClient = useQueryClient();
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
  width: 144px;
  height: 144px;
  margin: 10px;
  box-shadow: 1px 3px 0 rgb(0, 0, 0, 0.5);
  background-color: #cccccc;
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
