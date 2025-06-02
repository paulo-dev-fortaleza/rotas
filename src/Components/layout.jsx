import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <Sidebar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
