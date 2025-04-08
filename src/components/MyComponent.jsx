import { useState } from "react";
import language from "../data/languages"



function MyComponent({ array }) {

    console.log(array)
    const [click, setClick] = useState(null)

    return (
        <>
            <div className="container d-flex justify-content-evenly bg-secondary-subtle mt-5">
                {array.map(curElem => { <button key={curElem.id} onClick={() => setClick(curElem)}> {curElem.title}</button> })}
            </div >
        </>
    )
}

export default MyComponent;

// ok, iniziamo con lo step 1, il più facile! fammi un bel map sull'array di linguaggi e usalo per crearmi dei pulsanti in react
// 15:53
// uno per ciascun linguaggio, con testo corrispondente