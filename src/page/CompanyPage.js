import Layout from "../components/shared/Layout";
import CompanyList from "../components/company/CompanyList";
const CompanyPage= () => {
    return (
      <>
        <Layout>
          <CompanyList/>
          {/* 여기에 company 컴포넌트 넣기 */}
        </Layout>
      </>
    )
  }
  export default CompanyPage;