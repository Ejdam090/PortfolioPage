import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Components/Sidebar";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <AppStyled>
      <SideBar />
      <MainContentStyled>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </AppStyled>
  );
}

const MainContentStyled = styled.div`
  position: relative;
  margin-left: 15rem;
  min-height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 0.2rem;
  }
`;

const AppStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default App;
