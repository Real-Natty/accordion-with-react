import React from "react";
import { FaStar } from "react-icons/fa";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Stars = ({ selectedItem }) => {
  return (
    <div>
      {numbers.length > 0 &&
        numbers.map((number) => {
          const isShaded = selectedItem >= number;

          return <FaStar color={isShaded ? "yellow" : "initial"} />;
        })}
    </div>
  );
};

export default Stars;
