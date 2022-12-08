import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import * as api from "../../api/myAccount";
import { Carousel } from "../../utils/carousel";
import ProgressBar from "../../utils/progressBar";
import MyReviews from "./MyReviews";
import MyTitles from "./MyTitles";
import * as Styled from "./StyledInfo";
import ThemeLike from "./ThemeLike";
import MyGenre from "./MyGenre";
import Modal from "../modal/Modal";
import GenreModal from "../modal/GenreModal";
import { CTBox } from "../../styles/themeStyle";
import { useNavigate } from "react-router-dom";
import Example from "../../utils/Radar";
import setting from "../../asset/img/settings.png";
import down from "../../asset/img/down.png";
import up from "../../asset/img/up.png";
import CompanyLike from "./CompanyLike";
import { getAchieve } from "../../api/mainApi";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { loginCheck } from "../../api/store";

const MyInfo = () => {
  const mapData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const achieve = useQuery(["getAchieve"], getAchieve);
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
  const Tendata = [
    { name: "겁", value: User.data?.lessScare },
    { name: "방", value: User.data?.roomSize },
    { name: "자물쇠", value: User.data?.lockStyle },
    { name: "장치", value: User.data?.device },
    { name: "인테리어", value: User.data?.interior },
    { name: "활동성", value: User.data?.excitePreference },
  ];
  const genrePref = User.isLoading
    ? ""
    : User.data?.genrePreference?.split(" ").filter(Boolean);
  const stylePref = User.isLoading
    ? ""
    : User.data?.stylePreference?.split(" ").filter(Boolean);

  const loginCheckState = useRecoilValue(loginCheck);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginCheckState) {
      navigate("/");
    }
  }, [loginCheckState, navigate]);
  return (
    <>
      {isModal ? (
        <Modal
          closeModal={() => {
            setIsModal(false);
          }}
        >
          <GenreModal
            genrePref={genrePref}
            stylePref={stylePref}
            device={User.data?.device}
            excitePreference={User.data?.excitePreference}
            interior={User.data?.interior}
            lessScare={User.data?.lessScare}
            lockStyle={User.data?.lockStyle}
            roomSize={User.data?.roomSize}
            surprise={User.data?.surprise}
            setIsModal={setIsModal}
          />
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
                <Styled.UserEdit>
                  {isEdit ? (
                    <img
                      src={setting}
                      alt="setting"
                      onClick={() => {
                        postNick.mutate({ nickname: nameEdit });
                        setIsEdit(!isEdit);
                      }}
                    />
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
                <Styled.UserTitles>
                  <span>{User.isLoading ? "" : User.data.mainBadgeName}</span>
                </Styled.UserTitles>
                {isEdit ? (
                  <form>
                    <Styled.NameEdit
                      name="nickname"
                      value={nameEdit.nickname}
                      onChange={onChangeEdit}
                    ></Styled.NameEdit>
                  </form>
                ) : (
                  <Styled.UserName>
                    {User.isLoading ? "" : User.data.nickname}
                  </Styled.UserName>
                )}
                <ProgressBar
                  completed={User.isLoading ? 0 : achieve.data.achieveBadgeCnt}
                  goal={20}
                  height={`2rem`}
                  width={`95%`}
                  shadow={`0`}
                />
              </Styled.UserNameBox>
            </Styled.BoxWrap>
            <Styled.BoxWrap>
              <Styled.Heading>방탈출 성향</Styled.Heading>
              <Styled.TendencyBox>
                <Styled.EditGenre
                  src={setting}
                  alt="setting"
                  onClick={() => {
                    setIsModal(true);
                  }}
                />
                <div>
                  {genrePref
                    ? genrePref.map((data, index) => (
                        <MyGenre key={"genre" + index} genre={data} />
                      ))
                    : "아직 등록한 성향이 없습니다."}
                  {stylePref
                    ? stylePref.map((data, index) => (
                        <MyGenre key={"style" + index} genre={data} />
                      ))
                    : ""}
                </div>
                <Example data={Tendata} />
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
                  key={"badge" + index}
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
            {collapse ? (
              <img src={down} alt={"down"} />
            ) : (
              <img src={up} alt={"up"} />
            )}
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
            ) : Review.data?.length === 0 ? (
              <Carousel>
                {mapData.map((data, index) => (
                  <SwiperSlide key={"notyet" + index}>
                    <MyReviews
                      id={Math.floor(Math.random() * (20 * (index + 1)))}
                      themeName={`아직 리뷰가 없습니다`}
                      score={Math.floor(Math.random() * 5 + 1)}
                      comment={`눌러서 무작위 테마로 이동합니다.`}
                      playTime={new Date()}
                    />
                  </SwiperSlide>
                ))}
              </Carousel>
            ) : (
              <Carousel>
                {Review.data.map((data, index) => (
                  <SwiperSlide key={"Carousel" + index}>
                    <MyReviews
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
        <Styled.BoxWrap display="grid" gridColumns={`repeat(2, 1fr)`}>
          <Styled.LikeBox>
            <Styled.Heading>좋아요 업체</Styled.Heading>
            <Styled.ComWrap>
              {Company.isLoading ? (
                <Styled.ComWrap>
                  <CompanyLike companyName={""} companyImgUrl={""} />
                </Styled.ComWrap>
              ) : Company?.data.length === 0 ? (
                <Styled.ComWrap display={`flex`}>
                  <CTBox size={`24px`} margin={`10px`}>
                    아직 좋아요 한 업체가 없습니다
                  </CTBox>
                  <CTBox size={`24px`} margin={`10px`}>
                    업체를 좋아요 해보세요!
                  </CTBox>
                  <CTBox size={`24px`} margin={`10px`}>
                    👇👇👇
                  </CTBox>
                  <CTBox
                    size={`24px`}
                    margin={`10px`}
                    onClick={() => {
                      navigate(`/company`);
                    }}
                    color={`#1e9fc0`}
                  >
                    좋아요 하러가기
                  </CTBox>
                </Styled.ComWrap>
              ) : (
                <Styled.ComWrap>
                  {Company.data.map((data, index) => (
                    <CompanyLike
                      key={"company" + index}
                      id={data.id}
                      companyName={data.companyName}
                      ImgUrl={data.companyImgUrl}
                    />
                  ))}
                </Styled.ComWrap>
              )}
            </Styled.ComWrap>
          </Styled.LikeBox>
          <Styled.LikeBox>
            <Styled.Heading>좋아요 테마</Styled.Heading>
            {Theme.isLoading ? (
              <Styled.ComWrap>
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
              </Styled.ComWrap>
            ) : Theme?.data.length === 0 ? (
              <Styled.ComWrap display={`flex`}>
                <CTBox size={`24px`} margin={`10px`}>
                  아직 좋아요 한 테마가 없습니다
                </CTBox>
                <CTBox size={`24px`} margin={`10px`}>
                  테마를 좋아요 해보세요!
                </CTBox>
                <CTBox size={`24px`} margin={`10px`}>
                  👇👇👇
                </CTBox>
                <CTBox
                  size={`24px`}
                  margin={`10px`}
                  onClick={() => {
                    navigate(`/theme`);
                  }}
                  color={`#1e9fc0`}
                >
                  좋아요 하러가기
                </CTBox>
              </Styled.ComWrap>
            ) : (
              <Styled.ComWrap>
                {Theme.data.map((data, index) => (
                  <ThemeLike
                    key={"theme" + index}
                    id={data.id}
                    companyName={data.companyName}
                    ImgUrl={data.themeImgUrl}
                    themeName={data.themeName}
                  />
                ))}
              </Styled.ComWrap>
            )}
          </Styled.LikeBox>
        </Styled.BoxWrap>
      </Styled.Container>
    </>
  );
};

export default MyInfo;
