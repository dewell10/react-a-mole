import { useEffect } from "react";
import moleImg from "../mole.png";

export default function Mole(props) {
    // this is copied from solution 
  useEffect(() => {
    //   generates random seconds using combination of ceil and random Math functions
    let randSeconds = Math.ceil(Math.random() * 10000);
    // 
    let timer = setTimeout(() => {
        // I think this is flipping the toggle prop to false and getting rid of the Mole and displaying an EmptySlot through the ternary in MoleContainer
      props.toggle(false);
    //   the amount of time for toggle is random set in the line below
    }, randSeconds);
    // here is our useEffect clean up 
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        onClick={props.handleClick}
      />
    </div>
  );
}