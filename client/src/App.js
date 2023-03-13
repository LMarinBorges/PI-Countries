import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";
import { loadData, loadFailed } from "./actions";
import "./App.css";
import Card from "./components/Card";
import Index from "./routes/home/index";
import HomePage from "./routes/home";
import CountryDetails from "./routes/home/$country";
import NewActivity from "./routes/home/new";
import LandingPage from "./routes/index";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />} />,
    <Route path="/home" element={<HomePage />}>
      <Route index element={<Index />} />
      <Route path="activities/new" element={<NewActivity />} />
      <Route path="countries/:country" element={<CountryDetails />} />
    </Route>,
  ])
);

const fetchData = async (url) => {
  const request = await fetch(url);
  if (!request.ok) throw Error(`failed to fetch ${url}`);
  return request.json();
};

const initializeData = async (dispatch) => {
  try {
    const [countries, activities] = await Promise.all([
      fetchData("http://localhost:3001/countries"),
      fetchData("http://localhost:3001/activities"),
    ]);
    dispatch(loadData({ countries, activities }));
  } catch (e) {
    console.error(e);
    dispatch(loadFailed());
  }
};

const NotificationContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const dataState = useSelector((state) => state.data.state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeData);
  }, [dispatch]);
  switch (dataState) {
    case "loading": {
      return (
        <NotificationContainer>
          <Card>Cargando...</Card>
        </NotificationContainer>
      );
    }
    case "failed": {
      return (
        <NotificationContainer>
          <Card>Hubo un error. Por favor intente más tarde.</Card>
        </NotificationContainer>
      );
    }
    case "loaded": {
      return <RouterProvider router={router} />;
    }
    default: {
      throw Error("data loading state has wrong value");
    }
  }
}
