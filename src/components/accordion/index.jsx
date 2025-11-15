// // single selection
// // multiple selection

// import { useState } from "react";
// import data from "./data";
// import "./style.css";

// export default function Accordion() {
//   const [selected, setSelected] = useState(null);
//   const [enabledMultiSelection, setEnabledMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   function handleMultiSelection(getCurrentId) {
//     let cpyMultiple = [...multiple];
//     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

//     if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
//     else cpyMultiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMultiple);
//   }
//   console.log(selected, multiple);
//   console.log(selected);
//   return (
//     <div className="wrapper">
//       <button onClick={() => setEnabledMultiSelection(!enabledMultiSelection)}>
//         Enable Multi Selection
//       </button>
//       <div className="accordion">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="item" key={dataItem.id}>
//               <div
//                 onClick={
//                   enabledMultiSelection
//                     ? () => handleMultiSelection(dataItem.id)
//                     : () => handleSingleSelection(dataItem.id)
//                 }
//                 className="title"
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span> +</span>
//               </div>
//               {selected === dataItem.id ? (
//                 <div className="content">{dataItem.answer}</div>
//               ) : null}
//             </div>
//           ))
//         ) : (
//           <div>No data found !</div>
//         )}
//       </div>
//     </div>
//   );
// }
