import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
// importing our other files here instead of all to app.js 

export default function MoleContainer(props) {
    // use state hook
    let [theMole, setTheMole] = useState(false)
    // handleclick increases score prop and sets the mole to false 
    function handleClick(e){
        // this increases score 
        props.setScore(props.score + 1)
        // this sets the molestate back to false 
        setTheMole(false)
    }
    // this ternary either displays mole or an empty slot 
    // we are also passing props to Mole.js and EmptySlot.js 
    // since we are not passing the handleclick prop to EmptySlot we cannot click on them and increase score but we still need the setTheMole prop to change its status
    // when setTheMole is false we push an EmptySlot when setTheMole is true we render Mole
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick}/> : <EmptySlot toggle={setTheMole} />



  return (
    <div style={{"display":"inline-block", "width":"30vw"}}>
      
      {displayMole}
    </div>
  );
}