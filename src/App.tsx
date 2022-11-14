import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { JobList } from "./pages/JobList";
// import { DetailedJob } from "./pages/DetailedJob";
import { IJob } from "./models";

function App() {
  const [jobDetail, setJobDetail] = useState<IJob>();
  console.log(jobDetail);

  return (
    <Routes>
      <Route path="/" element={<JobList setJobDetail={setJobDetail} />} />
      {/* <Route
        path="/detail"
        element={<DetailedJob jobDetail={jobDetail ? jobDetail : null} />}
      /> */}
    </Routes>
  );
}

export default App;
