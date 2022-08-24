import React, { useState } from 'react'

const noValueMessage = "Ningún dato fue ingresado en este campo"

export default function RouteTwo() {
    const [nameValue, setNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [textAreaValue, setTextAreaValue] = useState("")
    const [submitedValues, setSubmitedValues] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitedValues([
            {
                type: "Nombre",
                value: nameValue !== "" ? nameValue : noValueMessage
            },
            {
                type: "Apellido",
                value: lastNameValue !== "" ? lastNameValue : noValueMessage
            },
            {
                type: "Comentarios",
                value: textAreaValue !== "" ? textAreaValue : noValueMessage
            }
        ])
        resetInputValues()
    }

    const resetInputValues = () => {
        setLastNameValue("")
        setNameValue("")
        setTextAreaValue("")
    }

    const handleNameChange = (event) => {
        setNameValue(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastNameValue(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value)
    }

    return (
        <div className='route-2-style'>
            <h1>Ruta 2</h1>

            <form 
                className='form-style container m-3'
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control input-style" 
                        id="inputName"
                        value={nameValue}  
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Apellido</label>
                    <input 
                        type="text" 
                        className="form-control input-style" 
                        id="inputLastName" 
                        value={lastNameValue} 
                        onChange={handleLastNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="textarea">Comentarios</label>
                    <textarea 
                        className="form-control input-style" 
                        id="textarea" 
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                    />
                </div>
                <button type="submit" className="btn mt-5 btn-secondary">Submit</button>
            </form>

            { 
                submitedValues &&
                <div className='submit-style'>
                    <h3>Los datos ingresados son:</h3>
                    { 
                        submitedValues.map(item => (
                            <h4><span>{item.type}</span>: {item.value}</h4>
                        ))
                    }
                </div>
            }
        </div>
    )
}
