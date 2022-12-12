import { useState } from "react";
import styled from "styled-components";
import Notice from "./Notice";
import { useQuery } from "@tanstack/react-query";
import { getNoticeList } from "../../api/mainApi";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Modal from "./Modal";

const NoticeList = () => {
  const [noticeId, setNoticeId] = useState();
  const [isModal, setIsModal] = useState(false);
  const { data, isLoading, isError, error } = useQuery(["getNoticeList"], () =>
    getNoticeList()
  );
  const onClickHandler = (event) => {
    setNoticeId(event.target.id);
    setIsModal(true);
  };

  return (
    <StCont>
      <StContTop>
        <h3>공지사항</h3>
        <div>
          <BsFillCaretLeftFill />
          <StPageNum>1 / 1</StPageNum>
          <BsFillCaretRightFill />
        </div>
      </StContTop>
      <Notices>
        {" "}
        {isLoading
          ? null
          : data.data.content.map((content, index) => {
              return (
                <div
                  onClick={onClickHandler}
                  className="notice-wrap"
                  key={content.id}>
                  <div className="index-wrap">
                    <div className="index">{index + 1}. </div>
                    <div className="title" id={content.id}>
                      {content.title}
                    </div>
                  </div>
                  <div className="date">{content.createdAt.substr(0, 10)}</div>
                </div>
              );
            })}
      </Notices>
      {isModal ? (
        <Modal closeModal={() => setIsModal(false)}>
          <Notice id={noticeId} setIsModal={setIsModal} />
        </Modal>
      ) : null}
    </StCont>
  );
};

export default NoticeList;

const StCont = styled.div`
  height: 200px;
  width: 800px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const StContTop = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  h3 {
    font-size: 32px;
    font-weight: bold;
  }
  div {
    font-size: 16px;
    display: flex;
    cursor: pointer;
  }
`;

const Notices = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border);
  margin-top: 20px;
  margin-left: 18px;
  border-radius: 10px;
  padding: 15px;
  font-size: 19px;
  .notice-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .index-wrap {
    display: flex;
  }
  .index {
    margin-right: 7px;
  }
`;

const StPageNum = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
`;
