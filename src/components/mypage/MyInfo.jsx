import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import * as api from "../../api/myAccount";
import { Carousel } from "../../utils/carousel";
import ProgressBar from "../../utils/progressBar";
import ComLike from "./ComLike";
import MyReviews from "./MyReviews";
import MyTitles from "./MyTitles";
import * as Styled from "./MyInfoSt";
import ThemeLike from "./ThemeLike";
import MyGenre from "./MyGenre";
import Modal from "../modal/Modal";
import GenreModal from "../modal/GenreModal";

const MyInfo = () => {
  const queryClient = useQueryClient();
  const User = useQuery(["getMyPage"], api.getMyPage);
  const Badges = useQuery(["getBadges"], api.getAllBadges);
  const Review = useQuery(["getReviews"], api.getMyReview);
  const Company = useQuery(["getCompany"], api.getMyCompany);
  const Theme = useQuery(["getTheme"], api.getMyTheme);
  const [isModal, setIsModal] = useState(false);
  const [isBadge, setBadge] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [nameEdit, setNameEdit] = useState("");
  const postNick = useMutation(
    ({ nickname: userNick }) => api.editNickName(userNick),
    {
      onSuccess: () => {
        setIsEdit(false);
        queryClient.invalidateQueries(["getMyPage"]);
        setNameEdit({ ...nameEdit, nickname: "" });
      },
    }
  );
  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    setNameEdit({ ...nameEdit, [name]: value });
  };
  return (
    <>
      {isModal ? (
        <Modal
          closeModal={() => {
            setIsModal(false);
          }}
        >
          <GenreModal />
        </Modal>
      ) : (
        ""
      )}
      <Styled.Container>
        <Styled.BoxWrap>
          <Styled.MyInfoBox>
            <Styled.BoxWrap>
              <Styled.UserNameBox>
                <Styled.MainTitle
                  BadgeImg={User.isLoading ? "" : User.data.mainBadgeImg}
                />
                <Styled.UserEdit
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                >
                  {isEdit ? (
                    <div
                      onClick={() => {
                        postNick.mutate({ nickname: nameEdit });
                      }}
                    >
                      완료
                    </div>
                  ) : (
                    <div>수정</div>
                  )}
                </Styled.UserEdit>
                <Styled.UserTitles>
                  {User.isLoading ? "" : User.data.mainBadgeName}
                </Styled.UserTitles>
                {isEdit ? (
                  <form>
                    <input
                      name="nickname"
                      value={nameEdit.nickname}
                      onChange={onChangeEdit}
                    ></input>
                  </form>
                ) : (
                  <Styled.UserName>
                    {User.isLoading ? "" : User.data.nickname}
                  </Styled.UserName>
                )}
                <ProgressBar
                  bgcolor={"#123120"}
                  completed={10}
                  goal={20}
                  height={`2rem`}
                />
              </Styled.UserNameBox>
            </Styled.BoxWrap>
            <Styled.BoxWrap>
              <Styled.Heading>방탈출 성향</Styled.Heading>
              <Styled.EditGenre
                onClick={() => {
                  setIsModal(true);
                }}
              >
                수정
              </Styled.EditGenre>

              <Styled.TendencyBox>
                <div>
                  <MyGenre genre={"SF/판타지"} />
                  <MyGenre genre={"공포"} />
                  <MyGenre genre={"문제방"} />
                </div>
              </Styled.TendencyBox>
            </Styled.BoxWrap>
          </Styled.MyInfoBox>
        </Styled.BoxWrap>
        <Styled.BoxWrap>
          <Styled.Heading>칭호</Styled.Heading>
          <div
            onClick={() => {
              setBadge(!isBadge);
            }}
          >
            {isBadge ? "칭호 받기중" : "칭호 변경중"}
          </div>
          <Styled.TitlesBox toggle={!collapse}>
            {Badges.isLoading ? (
              <MyTitles />
            ) : (
              Badges.data.map((data, index) => (
                <MyTitles
                  key={"titl" + index}
                  id={String(data.id)}
                  isBadge={isBadge}
                  BadgeName={collapse ? "" : data.badgeName}
                  Tooltip={!collapse ? "" : data.badgeName}
                  BadgeImg={data.badgeImgUrl}
                  BadgeExplain={data.BadgeExplain}
                />
              ))
            )}
          </Styled.TitlesBox>
          <Styled.CollapseTitles onClick={() => setCollapse(!collapse)}>
            {collapse ? "🔽" : "🔼"}
          </Styled.CollapseTitles>
        </Styled.BoxWrap>
        <Styled.BoxWrap>
          <Styled.Heading>내가 남긴 리뷰</Styled.Heading>
          <Styled.ReviewsBox>
            {Review.isLoading ? (
              <MyReviews
                themeName={"테마"}
                score={5}
                comment={"코멘트"}
                playTime={"2022-12-25"}
              />
            ) : (
              <Carousel>
                {Review.data.map((data, index) => (
                  <SwiperSlide>
                    <MyReviews
                      key={"rev" + index}
                      id={data.id}
                      themeName={data.themeName}
                      score={data.score}
                      comment={data.comment}
                      playTime={data.playDate}
                    />
                  </SwiperSlide>
                ))}
              </Carousel>
            )}
          </Styled.ReviewsBox>
        </Styled.BoxWrap>
        <Styled.BoxWrap>
          <Styled.Heading>좋아요</Styled.Heading>
          <Styled.LikeBox>
            업체
            <Styled.ComWrap>
              {Company.isLoading ? (
                <ComLike
                  companyName={"비밀의 화원 홍대점"}
                  companyImgUrl={
                    "https://mykeejaebucket.s3.ap-northeast-2.amazonaws.com/Server%EB%B9%84%EB%B0%80%EC%9D%98%ED%99%94%EC%9B%90%20%EB%8B%A4%EC%9A%B4%ED%83%80%EC%9A%B4%20%ED%99%8D%EB%8C%80%EC%A0%90.1668842023542.png"
                  }
                />
              ) : (
                Company.data.map((data, index) => (
                  <ComLike
                    key={"comp" + index}
                    id={data.id}
                    companyName={data.companyName}
                    companyImgUrl={data.companyImgUrl}
                  />
                ))
              )}
            </Styled.ComWrap>
            테마
            <Styled.ComWrap>
              {Theme.isLoading ? (
                <ThemeLike
                  companyName={"비밀의 화원 홍대점"}
                  companyImgUrl={
                    "https://mykeejaebucket.s3.ap-northeast-2.amazonaws.com/Server%EB%B9%84%EB%B0%80%EC%9D%98%ED%99%94%EC%9B%90%20%EB%8B%A4%EC%9A%B4%ED%83%80%EC%9A%B4%20%ED%99%8D%EB%8C%80%EC%A0%90.1668842023542.png"
                  }
                  themeName={"해리포터와 비밀의 화원"}
                />
              ) : (
                Theme.data.map((data, index) => (
                  <ThemeLike
                    key={"theme" + index}
                    id={data.id}
                    companyName={data.companyName}
                    themeImgUrl={data.themeImgUrl}
                    themeName={data.themeName}
                  />
                ))
              )}
            </Styled.ComWrap>
          </Styled.LikeBox>
        </Styled.BoxWrap>
      </Styled.Container>
    </>
  );
};

export default MyInfo;
