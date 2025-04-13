import { useState } from "react";
import './US1.css';

function US1(){

    let [bgcolor,changeBgColor] = useState('white');

    const toRed = () =>{
        changeBgColor('red');
    }

    const toBlue = () =>{
        changeBgColor('blue');
    }

    return(
        <>

        <div className="box" style={{backgroundColor: bgcolor}}>
            <button className="red" onClick={toRed}>
                Red
            </button>
            <button className="blue" onClick={toBlue}>
                Blue
            </button>
        </div>
        </>
    )
}

export default US1;