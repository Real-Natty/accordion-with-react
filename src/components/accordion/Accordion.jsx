import React from "react";
import "./style.css";
import { data } from "./data";
import AccordionItem from "./AccordionItem";

const AccordionOne = () => {
  return (
    <div className="accordionContent">
      <div className="multiScreen">
        <button>Multi Screen</button>
      </div>
      <div className="accordionSection">
        {data.map((item) => {
          return (
            <AccordionItem
              key={item.id}
              title={item.question}
              description={item.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionOne;
