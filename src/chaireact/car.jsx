import { useState } from "react";


function Headi() {
    const [val, setVal] = useState(10);

    const addVal = () => {
        setVal(val + 1);
    };

    const delVal = () => {
        setVal(val - 1);
    };

    return (
        <>
            <h1 className="bg-red-300">Let's Start React</h1>
            <h2>Current Value is {val}</h2>
            <button onClick={addVal}>Add Value</button>
            <button onClick={delVal}>Delete Value</button>
        </>
    );
}

export default Headi;
