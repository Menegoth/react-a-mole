import { useEffect } from "react";
import MoleImg from "./mole.png"

function Mole(props) {
    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setMole(false);
        }, seconds);
        return () => clearTimeout(timer);
    })
    
    return (
        <div>
            <img style={{"width": "10vw"}}
            src={MoleImg} 
            onClick={props.handleClick} 
            alt="Mole" />
        </div>
    )
}

export default Mole;