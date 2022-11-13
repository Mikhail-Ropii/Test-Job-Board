import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { JobList } from "./pages/JobList";
import { DetailedJob } from "./pages/DetailedJob";
import { JobTypes } from "../type";

function App() {
  const [jobDatail, setJobDetail] = useState<JobTypes>();

  return (
    <Routes>
      <Route path="/" element={<JobList setJobDetail={setJobDetail} />} />
      <Route path="/detail" element={<DetailedJob jobDatail={jobDatail} />} />
    </Routes>
  );
}

export default App;
