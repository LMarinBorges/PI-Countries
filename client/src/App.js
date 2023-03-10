import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/home";
import CountryDetails from "./routes/home/$country";
import NewActivity from "./routes/home/new";
import LandingPage from "./routes/index";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />} />,
    <Route path="/home" element={<HomePage />}>
      <Route path="activities/new" element={<NewActivity />} />
      <Route path="countries/:country" element={<CountryDetails />} />
    </Route>,
  ])
);

export default function App() {
  return <RouterProvider router={router} />;
}
