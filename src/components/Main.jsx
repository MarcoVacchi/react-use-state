import { useState } from "react";
import languages from "../data/languages"


function Main() {

    const [click, setClick] = useState(null)

    return (
        <>
            <div className="container d-flex justify-content-evenly bg-secondary-subtle mt-5">
                {languages.map(curElem => (<button className="btn btn-primary btn-sm" key={curElem.id} onClick={() => setClick(curElem)}> {curElem.title}</button>))}
            </div >
        </>
    )
}

export default Main;

{/* <div className="container d-flex justify-content-evenly bg-secondary-subtle mt-5">

                <button type="button" className="btn btn-primary btn-sm">HTML</button>
                <button type="button" className="btn btn-primary btn-sm">CSS</button>
                <button type="button" className="btn btn-primary btn-sm">javaScript</button>
                <button type="button" className="btn btn-primary btn-sm">Node.js</button>
                <button type="button" className="btn btn-primary btn-sm">Express</button>
                <button type="button" className="btn btn-primary btn-sm">ReactJS</button>

            </div> */}