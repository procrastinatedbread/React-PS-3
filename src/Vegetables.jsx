import { useState } from "react";

const Vegetables = ({ vegetables }) => {
  const [isFresh, setIsFresh] = useState(false);
  return (
    <>
      <ol>
        {vegetables.map(({ id, name, pickDate }) => {
          if (isFresh && pickDate === "2023-03-30") {
            return (
              <li
                style={{
                  color: "green"
                }}
                key={id}
              >
                {name}-{pickDate}
              </li>
            );
          }
          return (
            <li key={id}>
              {name}-{pickDate}
            </li>
          );
        })}
      </ol>
      <button
        onClick={() => {
          setIsFresh(!isFresh);
        }}
      >
        {isFresh ? "Hide" : "Highlight"} fresh Vegetables
      </button>
    </>
  );
};
export default Vegetables;
