import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./routes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
