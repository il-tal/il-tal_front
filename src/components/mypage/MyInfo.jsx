import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import * as api from "../../api/myAccount";
import { getAchieve } from "../../api/mainApi";
import { Carousel } from "../../utils/carousel";
import * as Styled from "./StyledInfo";
import MyReviews from "./component/MyReviews";
import MyTitles from "./component/MyTitles";
import ThemeLike from "./component/ThemeLike";
import Genre from "./component/Genre";
import Modal from "../modal/Modal";
import GenreModal from "../modal/GenreModal";
import { useNavigate } from "react-router-dom";
import TendencyRadar from "../../utils/Radar";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { loginCheck } from "../../api/store";
import Swal from "sweetalert2";
import UserProfile from "./component/UserProfile";
import NotLike from "./component/NotLike";
import setting from "../../asset/img/settings.png";
import down from "../../asset/img/down.png";
import up from "../../asset/img/up.png";

const MyInfo = () => {
  const mapData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const achieve = useQuery(["getAchieve"], getAchieve);
  const User = useQuery(["getMyPage"], api.getMyPage);
  const Badges = useQuery(["getBadges"], api.getAllBadges);
  const Review = useQuery(["getReviews"], api.getMyReview);
  const Company = useQuery(["getCompany"], api.getMyCompany);
  const Theme = useQuery(["getTheme"], api.getMyTheme, {
    onError: (error) => {},
  });
  const [isModal, setIsModal] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [themeFold, setThemeFold] = useState(true);
  const [companyFold, setCompanyFold] = useState(true);
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
    if (!loginCheckState && !User.isLoading) {
      navigate("/");
      Swal.fire({
        icon: "error",
        title: "로그인을 해주세요.",
        text: "로그인 한 사용자만 이용 가능합니다.",
      });
    }
  }, [loginCheckState, navigate, User.isLoading]);
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
              <UserProfile
                isLoading={User.isLoading}
                achieveLoading={achieve.isLoading}
                User={User.data}
                achieve={achieve.data}
              />
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
                <div className="">
                  {genrePref
                    ? genrePref.map((data, index) => (
                        <Genre key={"genre" + index} genre={data} />
                      ))
                    : "아직 등록한 성향이 없습니다."}
                  {stylePref
                    ? stylePref.map((data, index) => (
                        <Genre key={"style" + index} genre={data} />
                      ))
                    : " 오른쪽 톱니바퀴를 눌러 성향을 등록해보세요"}
                </div>
                <TendencyRadar data={Tendata} />
              </Styled.TendencyBox>
            </Styled.BoxWrap>
          </Styled.MyInfoBox>
        </Styled.BoxWrap>
        <Styled.BoxWrap>
          <Styled.Heading>칭호</Styled.Heading>
          <Styled.TitlesBox toggle={!collapse}>
            {Badges.isLoading ? (
              <MyTitles />
            ) : (
              Badges.data.map((data, index) => (
                <MyTitles
                  key={"badge" + index}
                  id={String(data.id)}
                  BadgeName={collapse ? "" : data.badgeName}
                  BadgeImg={data.badgeImgUrl}
                  BadgeExplain={data.BadgeExplain}
                  badgeGoal={data.badgeGoal}
                  success={data.totalAchieveCnt}
                  fail={data.totalFailCnt}
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
                color="#0e0e0e"
                background={"#f2f2f2"}
                themeName={`아직 리뷰가 없습니다`}
                score={Math.floor(Math.random() * 5 + 1)}
                comment={`눌러서 무작위 테마로 이동합니다.`}
                playTime={
                  new Date() - Math.floor(Math.random() * 1000000000000)
                }
              />
            ) : Review.data?.length === 0 ? (
              <Carousel>
                {mapData.map((data, index) => (
                  <SwiperSlide key={"notyet" + index}>
                    <MyReviews
                      id={Math.floor(Math.random() * (20 * (index + 1)))}
                      themeName={`아직 리뷰가 없습니다`}
                      themeImgUrl={`https://source.unsplash.com/random/400x${
                        245 + index
                      }`}
                      loading={"lazy"}
                      score={Math.floor(Math.random() * 5 + 1)}
                      comment={`눌러서 무작위 테마로 이동합니다.`}
                      playTime={
                        new Date() - Math.floor(Math.random() * 1000000000000)
                      }
                    />
                  </SwiperSlide>
                ))}
              </Carousel>
            ) : Review.data.length <= 3 ? (
              <Styled.NotCarousel>
                {Review.data.map((data, index) => (
                  <MyReviews
                    key={"notCarousel" + index}
                    id={data.id}
                    themeName={data.themeName}
                    score={data.score}
                    comment={data.comment}
                    playTime={data.playDate}
                    themeImgUrl={data.themeImgUrl}
                  />
                ))}
              </Styled.NotCarousel>
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
                      themeImgUrl={data.themeImgUrl}
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
            {Company.isLoading ? (
              <Styled.ComWrap>
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
              </Styled.ComWrap>
            ) : Company?.data.length === 0 ? (
              <NotLike name="업체" link="/company" />
            ) : (
              <Styled.ComWrap height={!companyFold ? 100 : `708px`}>
                {Company.data.map((data, index) => (
                  <ThemeLike
                    key={"company" + index}
                    id={data.id}
                    url={/company/ + data.id}
                    companyName={data.companyName}
                    ImgUrl={data.companyImgUrl}
                  />
                ))}
              </Styled.ComWrap>
            )}
            <Styled.CollapseTitles onClick={() => setCompanyFold(!companyFold)}>
              {companyFold ? (
                <img src={down} alt={"down"} />
              ) : (
                <img src={up} alt={"up"} />
              )}
            </Styled.CollapseTitles>
          </Styled.LikeBox>
          <Styled.LikeBox>
            <Styled.Heading>좋아요 테마</Styled.Heading>
            {Theme.isLoading ? (
              <Styled.ComWrap>
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
                <ThemeLike companyName={""} ImgUrl={""} themeName={""} />
              </Styled.ComWrap>
            ) : Theme?.data.length === 0 ? (
              <NotLike name="테마" link="/theme" />
            ) : (
              <Styled.ComWrap height={!themeFold ? 100 : `708px`}>
                {Theme.data.map((data, index) => (
                  <ThemeLike
                    key={"theme" + index}
                    id={data.id}
                    url={/theme/ + data.id}
                    companyName={data.companyName}
                    ImgUrl={data.themeImgUrl}
                    themeName={data.themeName}
                  />
                ))}
              </Styled.ComWrap>
            )}
            <Styled.CollapseTitles onClick={() => setThemeFold(!themeFold)}>
              {themeFold ? (
                <img src={down} alt={"down"} />
              ) : (
                <img src={up} alt={"up"} />
              )}
            </Styled.CollapseTitles>
          </Styled.LikeBox>
        </Styled.BoxWrap>
      </Styled.Container>
    </>
  );
};

export default MyInfo;
