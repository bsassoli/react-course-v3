const url = "https://www.course-api.com/react-tours-project";
import Loading from "./Loading";
import Tours from "./Tours";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (tourIdToRemove) => {
    const newTours = tours.filter((tour) => tour.id !== tourIdToRemove);
    setTours(newTours);
  };
  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Something went wrong");
      }
      const data = await resp.json();
      setIsLoading(false);

      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Our tours</h1>
      </div>
      <div className="title-underline"></div>
      {isLoading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className="container">
          <button className="btn" onClick={() => fetchData()}>
            Reload Tours
          </button>
        </div>
      ) : (
        <Tours tours={tours} callback={removeTour} />
      )}
    </>
  );
};
export default App;
