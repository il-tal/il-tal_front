import styled from "styled-components";

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <StModal onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </StModal>
  );
}

export default Modal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modalBody {
    position: absolute;

    background-color: white;

    box-shadow: 0 10px 3px 0 rgba(34, 36, 38, 0.15);
  }
`;
