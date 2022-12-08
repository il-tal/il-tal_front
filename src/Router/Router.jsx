import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import ThemePage from "../page/ThemePage";
import DetailTheme from "../page/DetailThemePage";
import DetailCompanyPage from "../page/DetailCompanyPage";
import MyPage from "../page/MyPage";
import ErrorPage from "../page/ErrorPage";
import CompanyPage from "../page/CompanyPage";
import MainLayout from "../page/MainLayout";
import Test from "../page/Test";
import GenreModal from "../components/modal/GenreModal";
import MyPageLayout from "../page/MyPageLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/theme/:id" element={<DetailTheme />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/:id" element={<DetailCompanyPage />} />
        </Route>
        <Route element={<MyPageLayout />}>
          <Route path="/myaccount" element={<MyPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<GenreModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
