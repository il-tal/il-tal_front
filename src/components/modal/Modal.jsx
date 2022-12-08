import styled from "styled-components";
import ReactDOM from "react-dom";

const Modal = (props) => {
  function closeModal() {
    props.closeModal();
  }

  return ReactDOM.createPortal(
    <StModal onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </StModal>,
    document.getElementById("modal-root")
  );
};

export default Modal;

const StModal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modalBody {
    /* position: absolute; */
    /* background-color: transparent; */
    box-shadow: 0 10px 3px 0 rgba(34, 36, 38, 0.15);
  }
`;
