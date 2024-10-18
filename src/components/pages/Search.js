import SearchEngine from "../features/SearchEngine";
import DashboardLayout from "../layout/DashboardLayout";
import Footer from "../layout/Footer";
import Main from "../layout/Main";

const SearchPage = () => {
  return (
    <DashboardLayout>
      <SearchEngine />
      <Main />
      <Footer />
    </DashboardLayout>
  );
};

export default SearchPage;
