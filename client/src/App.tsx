import {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";

const LandingPage = lazy(() => import("./routes/landing-page/landing-page.route"));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
}
