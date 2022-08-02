import { useState } from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'

function MoleContainer(props){
    const [displayMole, toggleMole] = useState(false)

    function handleClick(){
        props.setScore(props.score + 1)
        toggleMole(false)
    }

    let displayMole2 = displayMole ? <Mole handleClick={handleClick} toggleMole={toggleMole} setScore={props.setScore}/> : <EmptySlot toggleMole={toggleMole}/>

    return (
        <div>
            {displayMole2}
        </div>
    )
}

export default MoleContainer