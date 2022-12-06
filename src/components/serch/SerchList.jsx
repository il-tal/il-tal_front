import { useQuery } from "@tanstack/react-query";
import Pagination from "react-js-pagination";

import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSerchCompany, getSerchTheme } from "../../api/serchApi";
import { serchComPages, serchState, serchThemePages } from "../../api/store";
import ThemeSerch from "./ThemeSerch";

const SerchList = () => {
  const [serchComPage, setSerchComPage] = useRecoilState(serchComPages);
  const [serchThemePage, setSerchThemePage] = useRecoilState(serchThemePages);
  const serching = useRecoilValue(serchState);
  const themeList = useQuery(["getThemeSerch", serchThemePage, serching], () =>
    getSerchTheme({ serchWord, serchThemePage })
  );
  const companyList = useQuery(
    ["getCompanySerch", serchComPage, serching],
    () => getSerchCompany({ serchWord, serchComPage })
  );

  const onChangeThemeList = (page) => {
    setSerchThemePage(page - 1);
  };
  const onChangeComList = (page) => {
    setSerchComPage(page - 1);
  };

  const serchWord = useRecoilValue(serchState);
  //   if (themeList.isLoading) {
  //     return <div>loading..</div>;
  //   }
  //   if (companyList.isLoading) {
  //     return <div>loading..</div>;
  //   }
  return (
    <Container>
      <TitleListWrap>
        {companyList.isLoading ? (
          "Loading.."
        ) : (
          <>
            <Title>업체검색결과 {companyList.data.data.totalElements}개</Title>
            <ListWrap>
              {companyList.data.data.content.map((com) => {
                return (
                  <ThemeSerch
                    img={com.companyImgUrl}
                    title={com.companyName}
                    topinfo={com.location}
                    botinfo={com.address}
                    score={com.companyScore}
                    reivew={com.totalReviewCnt}
                  />
                );
              })}
            </ListWrap>
            <Pagination
              activePage={serchComPage + 1}
              itemsCountPerPage={companyList.data.data.size}
              totalItemsCount={companyList.data.data.totalElements}
              pageRangeDisplayed={5}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={onChangeComList}
            />
          </>
        )}
      </TitleListWrap>
      <TitleListWrap>
        {themeList.isLoading ? (
          "Loading..."
        ) : (
          <>
            <Title>테마검색결과 {themeList.data.data.totalElements}개</Title>
            <ListWrap>
              {themeList.data.data.content.map((theme) => {
                return (
                  <ThemeSerch
                    img={theme.themeImgUrl}
                    title={theme.themeName}
                    topinfo={theme.companyName}
                    botinfo={theme.genre}
                    score={theme.themeScore}
                    reivew={theme.reviewCnt}
                  />
                );
              })}
            </ListWrap>
            <Pagination
              activePage={serchThemePage + 1}
              itemsCountPerPage={themeList.data.data.size}
              totalItemsCount={themeList.data.data.totalElements}
              pageRangeDisplayed={5}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={onChangeThemeList}
            />
          </>
        )}
      </TitleListWrap>
    </Container>
  );
};

export default SerchList;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleListWrap = styled.div`
  width: 1440px;
  height: 610px;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 60px;
    height: 60px;
    /* border: 1px solid #e2e2e2; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 22px;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    /* scale: 1.3; */
    border-radius: 50% 50%;
    background-color: var(--color-main);
  }

  ul.pagination li a:hover {
    color: black;
  }
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 70px;
  display: flex;
  align-items: center;
`;

const ListWrap = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  flex-wrap: wrap;
`;
