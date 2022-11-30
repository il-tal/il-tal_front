import styled from "styled-components";
import Company from "./Company";
import { companyList } from "../../api";
import { useQuery } from "@tanstack/react-query";
import Locations from "./Locations";
import { useRecoilState } from "recoil";
import { companyLocation, companyPages } from "../../api/store";
import Pagination from "react-js-pagination";
import { ref } from "yup";

const CompanyList = () => {
  const [comLocation, setComLocation] = useRecoilState(companyLocation);
  const [comPage, setCompanyPage] = useRecoilState(companyPages);

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["getCompanyList", comLocation, comPage],
    () => companyList({ comPage, comLocation })
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
        <SearchResult>검색결과 30개</SearchResult>
        <StarFilter>별점순</StarFilter>
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
        {data.data.map((company) => {
          return (
            <div>
              <Company company={company} />
            </div>
          );
        })}
      </CompanyWrap>
      <div className="pagenation">
        <Pagination
          activePage={comPage + 1}
          itemsCountPerPage={9}
          totalItemsCount={data.size.totalSize}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
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
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
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
      color: #337ab7;
      font-size: 1rem;
    }

    ul.pagination li.active a {
      color: white;
    }

    ul.pagination li.active {
      background-color: #337ab7;
    }

    ul.pagination li a:hover,
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
