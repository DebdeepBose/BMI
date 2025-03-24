import { useState } from "react";
import "../Assets/index.css";

function Hook1() {
    const [length, setLength] = useState(8);
    const [number, allowNumber] = useState(false);
    const [chara, allowChara] = useState(false);
    const [passwords, setPassword] = useState("");

    let letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
      
    const passwordGenerator = () => {
        let passWordtoPassInInput = "";
        for (let i = 0; i < length; i++) {
            const letterIndex = Math.floor(Math.random() * 52);
            passWordtoPassInInput += letters[letterIndex];
        }
        setPassword(passWordtoPassInInput);
    };

    return (
        <div className="pass-text">
            <div className="textncopy">
            <input type="text" className="enterpass" value={passwords} />
            </div>
            <div>
            <input type="range"></input>
            <button onClick={passwordGenerator}>Generate Password</button>
            </div>
        </div>
    );
}

export default Hook1;
