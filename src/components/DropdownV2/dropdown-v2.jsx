import React, { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import StarRatingV2 from "./starRatingV2";

const users = [
  {
    id: "aaa",
    name: "One",
    value: 1,
  },
  {
    id: "aab",
    name: "Two",
    value: 2,
  },
  {
    id: "aac",
    name: "Three",
    value: 3,
  },
  {
    id: "aad",
    name: "Four",
    value: 4,
  },
  {
    id: "aae",
    name: "Five",
    value: 5,
  },
  {
    id: "aaf",
    name: "Six",
    value: 6,
  },
  {
    id: "aag",
    name: "Seven",
    value: 7,
  },
  {
    id: "aah",
    name: "Eight",
    value: 8,
  },
  {
    id: "aai",
    name: "Nine",
    value: 9,
  },
  {
    id: "aaj",
    name: "Ten",
    value: 10,
  },
];

const DropdownV2 = ({ selectedItem, setSelectedItem }) => {
  const [show, setShow] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setShow(!show);
  };

  console.log(show, setShow, setSelectedItem);

  return (
    <div>
      <aside>
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          {" "}
          {selectedItem ? selectedItem : "select"} <FaChevronDown />
        </div>

        {show && (
          <div>
            <p
              onClick={() => {
                setShow(false);
              }}
              style={{ display: "flex", justifyContent: "end" }}
            >
              Close
            </p>

            {users.length > 0 &&
              users.map((user) => {
                return (
                  <p
                    onClick={() => {
                      handleSelectItem(user.value);
                    }}
                    style={{
                      backgroundColor:
                        selectedItem === user.value ? "grey" : "initial",
                    }}
                  >
                    {" "}
                    {user.name}{" "}
                  </p>
                );
              })}
          </div>
        )}

        {/* {show && (
          <div>
            <p
              onClick={() => {
                handleSelectItem("judas");
              }}
              style={{
                backgroundColor: selectedItem === "judas" ? "grey" : "initial",
              }}
            >
              Judas
            </p>
            <p
              onClick={() => {
                handleSelectItem("paul");
              }}
            >
              Paul
            </p>
            <p>John</p>
            <p>Andrew</p>
            <p>Peter</p>
          </div>
        )} */}
      </aside>
      {/* starSection */}

      <div></div>
    </div>
  );
};

export default DropdownV2;
