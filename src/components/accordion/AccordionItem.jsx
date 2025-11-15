import React, { useState } from "react";
import "./style.css";

const AccordionItem = ({ title, description }) => {
  const [show, setShow] = useState(false);

  const handleDisplay = () => {
    setShow(!show);
  };
  return (
    <div className="accordionContent">
      <div className="accordionButtons">
        <div className="text" onClick={handleDisplay}>
          <h3> {title} </h3>
          <span>+</span>
        </div>
        {show === true && <p>{description}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
