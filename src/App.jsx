import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter } from "react-router-dom";
import Main from "./layout/main/MainContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
