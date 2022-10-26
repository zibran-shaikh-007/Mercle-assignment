import React, { Suspense, lazy } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { row, column } from "./data";
const Table = lazy(() => {
  return import("./components/table");
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<img src={logo} className="App-logo" alt="logo" />}>
        <Table row={row} data={column} />
      </Suspense>
    </div>
  );
};

export default App;
