import React from "react";
import AppRouter from "../../router/AppRouter";
import Header from "../header/Navbar";

const MainContent = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default MainContent;
