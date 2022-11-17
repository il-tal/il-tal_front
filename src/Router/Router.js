import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import MainPage from "../page/MainPage";
import ThemePage from "../page/ThemePage";
import DetailTheme from "../page/DetailThemePage";
import DetailCompanyPage from "../page/DetailCompanyPage";
import MyPage from "../page/MyPage";
import ErrorPage from "../page/ErrorPage";
import CompanyPage from "../page/CompanyPage";

import Test from "../page/Test";
import KakaoMap from "../components/map/KakaoMap";
import Footer from "../header/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/theme/:id" element={<DetailTheme />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/:id" element={<DetailCompanyPage />} />
        <Route path="/myaccount" element={<MyPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
