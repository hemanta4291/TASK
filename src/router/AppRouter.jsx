import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/home/Home"));
const ComingSoon = lazy(() => import("../components/ComingSoon"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
