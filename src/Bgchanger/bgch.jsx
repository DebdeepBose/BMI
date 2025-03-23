import { useState } from "react";

function BGC() {
    const [color, setColor] = useState("Black");
    const [h, setH] = useState("50px");
    const [w, setW] = useState("100px");

    return (
        <>
            <div className="color-box" 
                style={{ backgroundColor: color, padding: "20px", height: "1000px", display: "flex", 
                         alignItems: "center", flexDirection: "row", gap: "15px", justifyContent: "center" }}>
                
                <button onClick={() => { setColor("Red"); setH("100px"); setW("150px"); }} 
                    style={{ backgroundColor: "Red", height: h, width: w }}>
                    Red
                </button>

                <button onClick={() => { setColor("Blue"); setH("80px"); setW("120px"); }} 
                    style={{ backgroundColor: "Blue", height: h, width: w }}>
                    Blue
                </button>

                <button onClick={() => { setColor("Green"); setH("90px"); setW("130px"); }} 
                    style={{ backgroundColor: "Green", height: h, width: w }}>
                    Green
                </button>

                <button onClick={() => { setColor("Yellow"); setH("70px"); setW("110px"); }} 
                    style={{ backgroundColor: "Yellow", height: h, width: w }}>
                    Yellow
                </button>
            </div>
        </>
    );
}

export default BGC;
