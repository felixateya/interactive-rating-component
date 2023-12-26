import star from "./assets/icon-star.svg";

export function Rating({ rate, onSetRate, onSetIsRated }) {
  return (
    <div className="rating">
      <img src={star} />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </p>
      <div className="rates">
        <button
          className={`rate ${rate === 1 ? "active" : ""}`}
          onClick={() => onSetRate(1)}
        >
          1
        </button>
        <button
          className={`rate ${rate === 2 ? "active" : ""}`}
          onClick={() => onSetRate(2)}
        >
          2
        </button>
        <button
          className={`rate ${rate === 3 ? "active" : ""}`}
          onClick={() => onSetRate(3)}
        >
          3
        </button>
        <button
          className={`rate ${rate === 4 ? "active" : ""}`}
          onClick={() => onSetRate(4)}
        >
          4
        </button>
        <button
          className={`rate ${rate === 5 ? "active" : ""}`}
          onClick={() => onSetRate(5)}
        >
          5
        </button>
      </div>
      <button
        className="submit"
        onClick={onSetIsRated}
      >
        SUBMIT
      </button>
    </div>
  );
}
