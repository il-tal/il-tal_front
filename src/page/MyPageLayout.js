import Footer from "../components/shared/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Layout from "../components/shared/Layout";
import styled from "styled-components";


const MyPageLayout = (props) => {
  return (
    <LayoutBody >
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </LayoutBody>
  );
};

export default MyPageLayout;

const LayoutBody = styled.div`
  background-color: rgba(6, 195, 135, 0.05);
`