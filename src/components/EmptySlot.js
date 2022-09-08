import { useEffect } from "react"
import MoleHill from "./molehill.png"

function EmptySlot(props) {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setMole(true);
        }, seconds);
        return () => clearTimeout(timer);
    })

    return (
        <div>
            <img style={{"width": "10vw"}}
            src={MoleHill} 
            alt="MoleHill" />
        </div>
    )
}

export default EmptySlot;