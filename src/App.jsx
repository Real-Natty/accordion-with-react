// import "./App.css";
// import AccordionOne from "./components/accordion/Accordion";
// import AccordionItem from "./components/accordion/AccordionItem";
// import Example from "./components/accordion/Example";
// import StarredNumber from "./components/classwork-on-star";
// import Dropdown from "./components/DropdownSection/Dropdown/Dropdown";

import DropdownV2 from "./components/DropdownV2/dropdown-v2";
import StarRating from "./components/star-rating";
import Stars from "./components/stars";
import { useState } from "react";
// import ImageSlider from "./components/image-slider";
// import RandomColor from "./components/Random-color-changer";

// function App() {
//   return (
//     <>
//       {/* <div className="App">
//         <div className="content">
//           <Dropdown
//             buttonText="Dropdown button"
//             content={<p> Hello world</p>}
//           />
//         </div>
//       </div> */}

//       {/* <AccordionOne /> */}
//       {/* <RandomColor /> */}
// {/* <StarRating noOfStars={10} /> */}
//       {/* <StarredNumber noOfStars={10} /> */}
//       {/* <ImageSlider
//         url={"https://picsum.photos/v2/list"}
//         page={"1"}
//         limit={"10"}
//       /> */}
//       <DropdownV2 />
//     </>
//   );
// }

// export default App;

const App = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <DropdownV2
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Stars selectedItem={selectedItem} />
    </>
  );
};

export default App;
