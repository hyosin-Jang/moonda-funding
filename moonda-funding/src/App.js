import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import CheeringClass from "./pages/CheeringClass";
import OpenedClass from "./pages/OpenedClass";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/allclass" element={<CheeringClass />} />
          <Route path="/openclass" element={<OpenedClass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
