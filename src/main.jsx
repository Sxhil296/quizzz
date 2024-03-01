import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import ProphetsQuiz from "./components/ProphetsQuiz/ProphetsQuiz.jsx";
import QuranQuiz from "./components/QuranQuiz/QuranQuiz.jsx";
import HistoryQuiz from "./components/HistoryQuiz/HistoryQuiz.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/prophets-quiz" element={<ProphetsQuiz />} />
      <Route path="/quran-quiz" element={<QuranQuiz />} />
      <Route path="/history-quiz" element={<HistoryQuiz />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
