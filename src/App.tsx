import "./App.css";
import Home from "./app/components/Home.tsx";
import Query from "./app/components/Query.tsx";
import Insert from "./app/components/Insert.tsx";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="query" element={<Query />} />
        <Route path="insert" element={<Insert />} />
      </Routes>
    </>
  );
}

export default App;
