import { useEffect,useCallback,useState, useRef } from "react";

const PasswordGenerator = () => {
    const [length,setLength] = useState(8);
    const [allowNum,setAllowNum] = useState(false);
    const [allowChar,setAllowChar] = useState(false);
    const [pass,setPass] = useState();

    const passRef = useRef(null)

   

    const passwordGen = useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(allowNum) str += "1234567890";
        if(allowChar) str += "~!@#$%^&*()_+{}[]";

        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPass(pass);

    },[length, allowNum, allowChar, setPass])

    const copyPassword = useCallback(()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(pass);
    },[pass])

    useEffect(()=>{
        passwordGen()
    },[length, allowNum, allowChar, passwordGen])
    return (
        <>
            <h1>Password</h1>
            <div className="generator-box">
                <div className="main-input">
                    <input type="text" value={pass} readOnly ref={passRef}  />
                    <button onClick={copyPassword}>Copy</button>
                </div>
                <input type="range" min={8} max={25} value={length} onChange={(e)=>{setLength(e.target.value)}}  />Lenght:{length}
                <label><input type="checkbox" value={allowNum} onChange={()=>setAllowNum((prev)=>!prev)} />Allow String</label>
                <label><input type="checkbox" value={allowChar} onChange={()=>setAllowChar((prev)=>!prev)} />Allow Charactor</label>
            </div>

        </>
    )
}
export default PasswordGenerator