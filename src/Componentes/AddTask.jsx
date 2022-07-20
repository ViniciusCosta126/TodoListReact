import './addtask.css'
import {useState} from 'react'


function Addtask(props){
    const [input,setInput] = useState("")

    function handleInput(e){
        var textInput = e.target.value

        setInput(textInput)
    }

    return(
        <div className='addtask'>
            <label>
                <input type="text" value={input} onChange={handleInput} placeholder="Digite a task"/>
            </label>
            <button onClick={() => props.addTask(input)}>Adicionar</button>
        </div>
    )
}

export default Addtask