import * as React from "react";
import { Routes, Route} from "react-router-dom";
import ComponentsList from "../ComponentsList/ComponentsList";
import Home from "../Home/Home";

function Layout() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components" element={<ComponentsList />} />
      </Routes>
    </div>
  );
}

export default Layout;
