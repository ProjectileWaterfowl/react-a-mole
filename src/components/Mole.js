import { useEffect } from 'react'
import moleImg from '../mole.png'

function Mole(props) {
    useEffect(()=>{
        let seconds = Math.random()*5000
        let timer = setTimeout(()=>{
            props.toggleMole(false)
        }, seconds)
        return ()=> clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} alt="mole"/>
        </div>
    )
}

export default Mole