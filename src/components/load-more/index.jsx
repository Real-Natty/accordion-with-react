import React, { useState } from "react";
import { jobs } from "./loadMoreJobs";
import "./style.css";

const images = jobs;

const LoadMore = () => {
  const [lastIndexToShow, setLastIndexToShow] = useState(2);

  const imagesToShow = images.slice(0, lastIndexToShow);

  const handleShowMore = () => {
    if (lastIndexToShow < images.length) {
      setLastIndexToShow(lastIndexToShow + 1);
    }
  };
  //     const handleCle = () => {
  //  if()

  //     }

  return (
    <div className="show-more container">
      <div className="imageContainer">
        {imagesToShow.map((img) => (
          <img key={img.id} src={img.image} width={100} height={200} />
        ))}
      </div>

      <button onClick={handleShowMore}>Show More</button>
      {/* <button onClick={handleClose}>Close</button> */}
    </div>
  );
};

export default LoadMore;
