import data from "./data";
import Review from "./Review";
import { useState } from "react";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextBtn = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };
  const handlePrevBtn = () => {
    const newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : data.length - 1;
    setCurrentIndex(newIndex);
  };
  const handleRandomBtn = () => {
  if (data.length <= 1) return; // Nothing to do if only one item

  let randomNumber = Math.floor(Math.random() * data.length);
  while (randomNumber === currentIndex) {
    randomNumber = Math.floor(Math.random() * data.length);
  }
  setCurrentIndex(randomNumber);
};


  return (
    <>
      <Review
        review={data[currentIndex]}
        ix={currentIndex}
        handleNext={handleNextBtn}
        handlePrev={handlePrevBtn}
        handleRandom={handleRandomBtn}
      />
    </>
  );
};
export default App;
