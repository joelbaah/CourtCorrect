import SearchEngine from "../features/SearchEngine";
import DashboardLayout from "../layout/DashboardLayout";
import Footer from "../layout/Footer";

const SearchPage = () => {
  return (
    <DashboardLayout>
      <SearchEngine />
      <Footer />
    </DashboardLayout>
  );
};

export default SearchPage;
