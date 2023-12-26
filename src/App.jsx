/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";
import { Rating } from "./Rating";
import { Thanks } from "./Thanks";
function App() {
  const [rate, setRate] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const handleSetRate = (rating) => {
    setRate(rating);
  };
  const handleSetIsRated = () => {
    setIsRated(true);
  };
  return (
    <div className="app">
      {!isRated && (
        <Rating
          isRated={isRated}
          onSetIsRated={handleSetIsRated}
          onSetRate={handleSetRate}
        />
      )}
      {isRated && <Thanks rate={rate} />}
    </div>
  );
}

export default App;
