import { useState } from "react"


export const Form = () => {

    const [name, setName] = useState('')

    const changeName = () => {
        setName(name.toUpperCase())
    }

    return (
        <div>
            <input type="text"
                onChange={(e) => {setName(e.target.value)}}
                placeholder='Type your name'
            />
            <span>{name}</span>
            <button onClick={changeName}>TransformName</button>
        </div>
    )
}
