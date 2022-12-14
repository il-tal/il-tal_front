import styled from "styled-components";
import Company from "./Company";
import { companyList } from "../../api";
import { useQuery } from "@tanstack/react-query";
import Locations from "./Locations";
import { useRecoilState } from "recoil";
import { companyLocation, companyPages } from "../../api/store";
import Pagination from "react-js-pagination";
import Narrow from "../../asset/gray_narrow.png";
import nextgray from "../../asset/next-gray.png";
import prevgray from "../../asset/prev-gray.png";
import nextgreen from "../../asset/next-green.png";
import prevgreen from "../../asset/prev-green.png";
import { ref } from "yup";

const CompanyList = () => {
  const [comLocation, setComLocation] = useRecoilState(companyLocation);
  const [comPage, setCompanyPage] = useRecoilState(companyPages);

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["getCompanyList", comLocation, comPage],
    () => companyList({ comPage, comLocation }),
    {
      onSuccess: () => {
        window.scrollTo(0, 0);
      },
    }
  );

  const onChangeHandler = (e) => {
    setComLocation(e.target.value);
  };

  const onPageHandler = (page) => {
    setCompanyPage(page - 1);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Category>
        <SearchResult>검색결과 {data.data.totalElements}개</SearchResult>
        <div>
          <select
            className="filter"
            onChange={onChangeHandler}
            value={comLocation}
          >
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
        {data.data.content.map((company, index) => {
          return (
            <div key={`company${index}`}>
              <Company company={company} />
            </div>
          );
        })}
      </CompanyWrap>
      <div className="pagenation">
        <Pagination
          activePage={comPage + 1}
          itemsCountPerPage={9}
          totalItemsCount={data.data.totalElements}
          pageRangeDisplayed={5}
          hideFirstLastPages={true}
          prevPageText={
            comPage === 0 ? (
              <img src={prevgray} alt="next" />
            ) : (
              <img src={prevgreen} alt="next" />
            )
          }
          nextPageText={
            comPage + 1 === data.data.totalPages ? (
              <img src={nextgray} alt="next" />
            ) : (
              <img src={nextgreen} alt="next" />
            )
          }
          onChange={onPageHandler}
        />
      </div>
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
  .pagenation {
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
  }
`;

const Category = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filter {
    height: 48px;
    width: 127px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8a8a8a;
    border-radius: 8px;
    text-align: left;
    padding-left: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${Narrow}) no-repeat 95% 50%;
    ::-ms-expand {
      display: none;
    }
    cursor: pointer;
  }
`;

const SearchResult = styled.div`
  font-size: 21px;
  font-weight: bold;
`;

const StarFilter = styled.button`
  /* margin-right: 10px; */
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 17px;
`;

const CompanyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 49px;
  margin-bottom: 70px;
`;
