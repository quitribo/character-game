import React, { useState } from "react";
import "./App.css";

import importPic from "./importPic";
import AddPic from "./AddPic";

const {
  body,
  eyes,
  hair,
  nose,
  mouths,
  eyebrows,
  hats,
  glasses,
  clothing1,
  clothing2,
  clothing3,
} = importPic;

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [bodypart, setBodyPart] = useState(Object.values(body["pics"])[0]);
  const [eyepart, setEyePart] = useState(Object.values(eyes["pics"])[0]);
  const [hairpart, setHairPart] = useState(Object.values(hair["pics"])[0]);
  const nosepart = Object.values(nose["pics"]);
  const [mouthpart, setMouthPart] = useState(Object.values(mouths["pics"])[0]);
  const [eyebrowpart, setEyeBrowPart] = useState(
    Object.values(eyebrows["pics"])[0]
  );
  const [hatpart, setHatPart] = useState(Object.values(hats["pics"])[0]);
  const [glasspart, setGlassPart] = useState(Object.values(glasses["pics"])[0]);
  const [clothing1part, setClothing1Part] = useState(
    Object.values(clothing1)[0]
  );
  const [clothing2part, setClothing2Part] = useState(
    Object.values(clothing2)[0]
  );
  const [clothing3part, setClothing3Part] = useState(
    Object.values(clothing3)[0]
  );

  // Redefine state of bodypart, can not modify
  // setBodyPart = (x) =>{bodyPart = x)

  const handleClickBody = (p) => {
    setBodyPart(p);
  };

  const handleClickEye = (p) => {
    setEyePart(p);
  };

  const handleClickHair = (p) => {
    setHairPart(p);
  };

  // const handleClickNose = (p) => {
  //   setNosePart(p);
  // };

  const handleClickMouth = (p) => {
    setMouthPart(p);
  };

  const handleClickEyeBrow = (p) => {
    setEyeBrowPart(p);
  };

  const handleClickHat = (p) => {
    setHatPart(p);
  };

  const handleClickGlass = (p) => {
    setGlassPart(p);
  };

  const handleClickClothing1 = (p) => {
    setClothing1Part(p);
  };

  const handleClickClothing2 = (p) => {
    setClothing2Part(p);
  };

  const handleClickClothing3 = (p) => {
    setClothing3Part(p);
  };

  const randomFunc = (num) => {
    return Math.floor(Math.random() * num);
  };

  const randomButton = () => {
    setBodyPart(Object.values(body["pics"])[randomFunc(total.body)]);
    setEyePart(Object.values(eyes["pics"])[randomFunc(total.eyes)]);
    setHairPart(Object.values(hair["pics"])[randomFunc(total.hair)]);
    setMouthPart(Object.values(mouths["pics"])[randomFunc(total.mouths)]);
    setEyeBrowPart(Object.values(eyebrows["pics"])[randomFunc(total.eyebrows)]);
    setHatPart(Object.values(hats["pics"])[randomFunc(total.hat)]);
    setGlassPart(Object.values(glasses["pics"])[randomFunc(total.glasses)]);
    setClothing1Part(Object.values(clothing1)[randomFunc(total.clothing1)]);
    setClothing2Part(Object.values(clothing2)[randomFunc(total.clothing2)]);
    setClothing3Part(Object.values(clothing3)[randomFunc(total.clothing3)]);
  };

  return (
    <div className="container">
      <div class="title">CHARACTER</div>
      <div class="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div class="divider"></div>

      <div className="avatar-group">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img
              src={bodypart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "0" }}
              id="body-img"
            />
            <img
              src={eyepart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "1" }}
            />
            <img
              src={hairpart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "6" }}
            />
            <img
              src={nosepart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "6" }}
            />
            <img
              src={mouthpart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "2" }}
            />
            <img
              src={eyebrowpart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />

            <img
              src={hatpart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />
            <img
              src={glasspart}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />
            <img
              src={clothing1part}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />
            <img
              src={clothing2part}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />
            <img
              src={clothing3part}
              alt=""
              width="260"
              style={{ position: "absolute", zIndex: "3" }}
            />
          </div>

          <div className="text-center" style={{ position: "relative" }}>
            <button className="button" onClick={randomButton}>
              Randomize!
            </button>
          </div>
        </div>

        <div>
          <AddPic part={body} handleClick={handleClickBody} />
          <AddPic part={eyes} handleClick={handleClickEye} />
          <AddPic part={hair} handleClick={handleClickHair} />
          {/* <AddPic part={nose} handleClick={handleClickNose} /> */}
          <AddPic part={mouths} handleClick={handleClickMouth} />
          <AddPic part={eyebrows} handleClick={handleClickEyeBrow} />
          <AddPic part={hats} handleClick={handleClickHat} />
          <AddPic part={glasses} handleClick={handleClickGlass} />
          <AddPic part={clothing1} handleClick={handleClickClothing1} />
          <AddPic part={clothing2} handleClick={handleClickClothing2} />
          <AddPic part={clothing3} handleClick={handleClickClothing3} />
        </div>
      </div>
    </div>
  );
}

export default App;
