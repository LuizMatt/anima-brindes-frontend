import AllRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCss from "./styles";
import NavbarComponent from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <NavbarComponent />
      <AllRoutes />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </BrowserRouter>
  );
}

export default App;
