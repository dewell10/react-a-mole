import { useEffect } from "react";
import MoleHill from "../molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    //   same random seconds generated although smaller numbers 
    let randSeconds = Math.ceil(Math.random() * 5000);

    let timer = setTimeout(() => {
        // toggling prop to true should then display the Mole from the ternary in MoleContainer
      props.toggle(true);
    //   runs function at random seconds defined above
    }, randSeconds);
    // useEffect clean up here 
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={MoleHill} />
    </div>
  );
};

export default EmptySlot;