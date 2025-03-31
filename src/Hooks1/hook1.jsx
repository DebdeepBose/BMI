import { useState, useCallback } from "react";
import "../Assets/index.css";

function Hook1() {
  const [length, setLength] = useState(8); // Default value set
  const [number, setNumber] = useState(false);
  const [chara, setChara] = useState(false);
  const [passwords, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let passWordtoPassInInput = "";
    let pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (number) {
      pass += "0123456789";
    }
    if (chara) {
      pass += "-/?-+*-|@#&^%=.~,><";
    }

    for (let i = 1; i <= length; i++) {
      const passIndex = Math.floor(Math.random() * pass.length);
      passWordtoPassInInput += pass[passIndex];
    }

    setPassword(passWordtoPassInInput);
  }, [length, number, chara]);

  return (
    <div className="pass-text" >
      <div className="textncopy">
        <input type="text" className="enterpass" value={passwords} readOnly />
        <button className="copy" onClick={() => navigator.clipboard.writeText(passwords)}>Copy</button>
      </div>
      <div>
        <input 
          type="range" 
          max={20} 
          min={6} 
          value={length} 
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <span>Length: {length}</span>
        <br />
        <input 
          type="checkbox" 
          id="ntick"
          checked={number} 
          onChange={() => setNumber(!number)} 
        />
        <label htmlFor="ntick">Include Numbers</label>
        <br />
        <input 
          type="checkbox" 
          id="charTick"
          checked={chara} 
          onChange={() => setChara(!chara)} 
        />
        <label htmlFor="charTick">Include Special Characters</label>
        <br />
        <button onClick={passwordGenerator}>Generate Password</button>
      </div>
    </div>
  );
}

export default Hook1;
