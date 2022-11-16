import styled from "styled-components";

function Layout({ children }) {
  return <STLayout>{children}</STLayout>;
}
export default Layout;

const STLayout = styled.div`
  width: 1000px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
