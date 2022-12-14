import styled from "styled-components";

function Layout({ children }) {
  return <STLayout>{children}</STLayout>;
}
export default Layout;

const STLayout = styled.div`
  width: 1440px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
