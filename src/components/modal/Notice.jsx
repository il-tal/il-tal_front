import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getDetailNotice } from "../../api/mainApi";
import { HiOutlineX } from "react-icons/hi";

const Notice = ({ id, setIsModal }) => {
  const { data, isLoading } = useQuery(["getDetailNotice"], () =>
    getDetailNotice(id)
  );
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StCont>
      <StSubCont>
        <StTitle>
          <div>
            <span>[공지사항]</span>
            <span> {data.data.title}</span>
          </div>
          <div className="exit-icon" onClick={() => setIsModal(false)}>
            <HiOutlineX />
          </div>
        </StTitle>
        <Line />
        <StContentTitle>
          <div className="content-top">
            <span>{data.data.title}</span>
            <span>{data.data.createdAt.substr(0, 10)}</span>
          </div>
        </StContentTitle>
        <StContent>
          {data.data.noticeContent}
          <img src={data.data.noticeImgUrl} alt={data.data.noticeContent} />
        </StContent>
      </StSubCont>
    </StCont>
  );
};

export default Notice;

const StCont = styled.div`
  width: 900px;
  height: 850px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

const StSubCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const StTitle = styled.div`
  font-size: 27px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  width: 840px;
  font-weight: bold;
  .exit-icon {
    cursor: pointer;
  }
`;

const Line = styled.hr`
  width: 850px;
  color: #cccccc;
`;

const StContentTitle = styled.div`
  width: 840px;
  font-size: 23px;
  font-weight: bold;
  .content-top {
    display: flex;
    justify-content: space-between;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 18px;
  margin-top: 15px;
  text-align: left;
  row-gap: 15px;
  scrollbar-width: thin;
  overflow-y: scroll;
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    padding: 10px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--color-main);
  }
`;
