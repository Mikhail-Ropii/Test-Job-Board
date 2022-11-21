import { Routes, Route } from "react-router-dom";
import "./App.css";
import { JobList } from "./pages/JobList";
import { DetailedJob } from "./pages/DetailedJob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/:id" element={<DetailedJob />} />
    </Routes>
  );
}

export default App;
