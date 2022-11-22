import Footer from "../components/shared/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Layout from "../components/shared/Layout";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
};

export default MainLayout;
