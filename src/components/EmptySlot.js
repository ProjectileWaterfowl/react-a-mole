import { useEffect } from "react"
import moleHill from '../molehill.png'

function EmptySlot(props){
    useEffect(()=>{
        let seconds = Math.random()*10000
        let timer = setTimeout(()=>{
            props.toggleMole(true)
        }, seconds)
        return ()=> clearTimeout(timer)
    })
    
    return (
        <div>
            <img style={{'width': '30vw'}} src={moleHill} alt="molehill" />
        </div>
    )
}

export default EmptySlot