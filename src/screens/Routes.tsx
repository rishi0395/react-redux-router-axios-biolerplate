import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import DetailScreen from "./Detail";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "30px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-screen" element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
