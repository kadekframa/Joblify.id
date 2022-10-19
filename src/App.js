import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import CreateJobVacancy from "./pages/CreateJobVacancy";
import Dashboard from "./pages/Dashboard";
import EditJobVacancy from "./pages/EditJobVacancy";
import ExploreVacancyPage from "./pages/ExploreVacancyPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/explore-vacancy"
            element={
              <Layout>
                <ExploreVacancyPage />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard/>
              </Layout>
            }
          />
          <Route
            path="/add-jobvacancy"
            element={
              <Layout>
                <CreateJobVacancy/>
              </Layout>
            }
          />
          <Route
            path="/edit-jobvacancy/:id"
            element={
              <Layout>
                <EditJobVacancy/>
              </Layout>
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
