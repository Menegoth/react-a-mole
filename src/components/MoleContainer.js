import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
import { useState } from "react";

function MoleContainer(props) {
    let [mole, setMole] = useState(false);

    function handleClick() {
        props.setScore(props.score + 1);
        setMole(false);
    } 

    let displayMole = mole ? <Mole setMole={setMole} setScore={props.setScore} handleClick={handleClick} /> : <EmptySlot setMole={setMole}/>

    return (
        <div style={{"display": "inline-block", "width": "30vw"}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer;