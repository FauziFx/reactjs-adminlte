import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <SideNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
