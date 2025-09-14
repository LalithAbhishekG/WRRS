import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About";
import OurImpact from "./Pages/OurImpact.jsx";
import GetInvolved from "./Pages/GetInvolved";
import NewsEvents from "./Pages/NewsEvents";
import TeamsPage from "./Pages/Teams";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </div>
  );
}

export default App;
