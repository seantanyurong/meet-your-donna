import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment className="bg-[#EFEFEF]">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
