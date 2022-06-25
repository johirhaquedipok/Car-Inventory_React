import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/Authorization/Login/LogIn";
import RequireAuth from "./Components/Authorization/RequireAuth/RequireAuth";
import Signup from "./Components/Authorization/SignUp/Signup";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import OurServices from "./Components/Home/Our Services/OurServices";
import SingleInventory from "./Components/Inventory/SingleInventory/SingleInventory";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<OurServices />} />

          <Route
            path="/blog"
            element={
              <RequireAuth>
                <Blog />
              </RequireAuth>
            }
          />
          <Route
            path="/inventory/:id"
            element={
              <RequireAuth>
                <SingleInventory />
              </RequireAuth>
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
