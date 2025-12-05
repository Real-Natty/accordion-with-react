import { useState } from "react";
import "./App.css";
// import AccordionOne from "./components/accordion/Accordion";
// import AccordionItem from "./components/accordion/AccordionItem";
// import Example from "./components/accordion/Example";
// import StarredNumber from "./components/classwork-on-star";
// import Dropdown from "./components/DropdownSection/Dropdown/Dropdown";

import DropdownV2 from "./components/DropdownV2/dropdown-v2";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import StarRating from "./components/star-rating";
import Stars from "./components/stars";
// // import { useState } from "react";
// import React, { useState } from "react";
import TreeView from "./components/tree-view";
// import { menus } from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";

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
  // const [selectedItem, setSelectedItem] = useState("");

  // const [progress, setProgress] = useState(0);

  return (
    <>
      {/* <DropdownV2
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Stars selectedItem={selectedItem} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* 
      <section
        id="circular-progress"
        data-progress={progress.toString() + "%"}
        style={{ "--progress": progress }}
      ></section>

      <button onClick={() => progress < 100 && setProgress(progress + 5)}>
        increase by 5 percent
      </button> */}

      {/* <QRCodeGenerator /> */}

      <LightDarkMode />

      {/* {menus.map((menu) => ( */}
      {/* // <MenuItem menu={menu} /> */}
      {/* ))} */}
    </>
  );
};

export default App;

const MenuItem = (menu) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <a href={menu.to}>{menu.label}</a>
        <span onClick={() => setOpen(!open)}>+ more</span>
      </div>

      {open &&
        menu.children.map((menuItem) => {
          if (menuItem.children) {
            return (
              <>
                <div>
                  <a href={menu.to}>{menu.label}</a>
                  <span onClick={() => setOpen(!open)}>+ more</span>
                </div>

                {menuItem.children.map((x) => {
                  return <a href={x.to}>{x.label}</a>;
                })}
              </>
            );
          }
        })}
    </div>
  );
};
