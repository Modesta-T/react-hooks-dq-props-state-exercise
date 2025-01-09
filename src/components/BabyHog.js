import React,{useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, eyeColor, hobby}) {
  const [weight,setWeight] = useState(200)
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    setWeight((prevWeight)=> e.target.name === '+'? prevWeight + 10 : prevWeight - 10);
    
  }
function getEyeColorImage(eyeColor){
  switch(eyeColor){
    case 'blue':
      return BlueBaby
      case 'sun':
        return SunBaby
        case 'glowing':
          return GlowingBaby
          default:
            return normalBaby
  }
}  

  return (
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      <h3>Weight:</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={getEyeColorImage(eyeColor)}
          style={{ height: `${weight}px` }}
          alt= {`${name} babyhog`}
        />
      </div>
    </li>
  );
}

export default BabyHog;
