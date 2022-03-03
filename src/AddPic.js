import React from "react";

function AddPic({ part, handleClick }) {
  // console.log(part);
  // console.log(handleClick);
  // console.log(Object.keys(part));
  // console.log(part);

  const objVal = Object.values(part["pics"]);
  // console.log(Object.values(objVal));

  return (
    <div className="list-section" style={{ position: "relative" }}>
      <h2>{part["name"]}</h2>
      <div className="list">
        {Object.values(objVal).map((p) => {
          return (
            <img
              src={p}
              alt="asdasd"
              width={50}
              key={p}
              onClick={() => {
                handleClick(p);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddPic;
