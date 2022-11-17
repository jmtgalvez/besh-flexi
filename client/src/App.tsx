import {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components";

const AuthPage = lazy(() => import("./routes/authentication/authentication.route"));
const Dashboard = lazy(() => import("./routes/dashboard/dashboard.route"));
const LandingPage = lazy(() => import("./routes/landing-page/landing-page.route"));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="authentication" element={<AuthPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
