import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import OurImpact from "./Pages/OurImpact";
import GetInvolved from "./Pages/GetInvolved";
import NewsEvents from "./Pages/NewsEvents";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/news-events" element={<NewsEvents />} />
      </Routes>
    </div>
  );
}

export default App;
