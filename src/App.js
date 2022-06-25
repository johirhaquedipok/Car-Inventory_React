import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header/Header";
function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Container>
  );
}

export default App;
