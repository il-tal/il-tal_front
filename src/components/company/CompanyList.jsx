import styled from "styled-components";
import Company from "./Company";
import { companyList, companyWish } from "../../api";
import { wishTheme } from "../../api/ThemeApi";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import Locations from "./Locations";
import { useRecoilState } from "recoil";
import { companyLocation } from "../../api/store";

const CompanyList = () => {
  const [comLocation, setComLocation] = useRecoilState(companyLocation);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ["getCompanyList", comLocation],
    ({ pageParam = 0 }) => companyList({ id: pageParam, loc: comLocation }),
    {
      getNextPageParam: (lastpage, allpages) => {
        if (lastpage.data.length === 5) {
          return allpages.length;
        } else if (lastpage.data.length < 5) {
          return undefined;
        }
      },
    }
  );
  console.log(data);
  const onChangeHandler = (e) => {
    setComLocation(e.target.value);
  };
  console.log("왜언디파인드임?", comLocation);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Category>
        <SearchResult>검색결과 30개</SearchResult>
        <StarFilter>별점순</StarFilter>
        <div>
          <select
            className="filter"
            onChange={onChangeHandler}
            value={comLocation}>
            {Locations.location.map((arg) => {
              return (
                <option key={arg.value} value={arg.value}>
                  {arg.name}
                </option>
              );
            })}
          </select>
        </div>
      </Category>
      <CompanyWrap>
        <InfiniteScroll
          className="infinite"
          loadMore={fetchNextPage}
          hasMore={hasNextPage}>
          {data.pages.map((pagedata) => {
            return pagedata.data.map((company) => {
              return <Company company={company} />;
            });
          })}
        </InfiniteScroll>
      </CompanyWrap>
    </Container>
  );
};
export default CompanyList;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Category = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filter {
    height: 30px;
    width: 100px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchResult = styled.div``;

const Filter = styled.button`
  border: 1px solid gray;
  background-color: transparent;
  font-size: 17px;
`;

const StarFilter = styled.button`
  /* margin-right: 10px; */
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 17px;
`;

const LocationFilter = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 17px;
`;

const CompanyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
