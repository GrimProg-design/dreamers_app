import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
const Home = lazy(() => import("./components/home/Home"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
