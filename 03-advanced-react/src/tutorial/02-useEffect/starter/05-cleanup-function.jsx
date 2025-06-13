import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const toggleHandler = (currentStatus) => setToggleStatus(!currentStatus);
  return (
    <>
      <button onClick={() => toggleHandler(toggleStatus)} className="btn">
        Toggle Component
      </button>
      {console.log(toggleStatus)}
      {toggleStatus && <SomeComponent />}
    </>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log("hey from interval");
    }, 1000);
    return () => clearInterval(intID);
  }, []);

  return <h1>Hi!</h1>;
};
export default CleanupFunction;
