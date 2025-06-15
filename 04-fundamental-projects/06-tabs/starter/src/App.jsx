const url = "https://www.course-api.com/react-tabs-project";
import { v4 as uuidv4 } from "uuid";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnCointaner";
import { useState, useEffect } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const dataWithId = data.map((item) => ({ id: uuidv4(), ...item }));
      setJobs(dataWithId);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectJob = (id) => {
    const idx = jobs.findIndex((job) => job.id === id);
    if (idx !== -1) {
      setCurrentJobIndex(idx);
    }
  }
  return (
    <div>
      {isLoading ? (
        <div className="loading">loading </div>
      ) : (
        <section className="jobs-center">
          <BtnContainer jobs={jobs} callback={selectJob}/>
          <JobInfo job={jobs[currentJobIndex]} />
        </section>
      )}
    </div>
  );
};
export default App;
