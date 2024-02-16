import { useState } from 'react'

const ConvertUpper = () => {
  const [text,setText] = useState('tet');
  const handleChange = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleVal = (e) =>{
    setText(e.target.value)
  }
  const handleClear = () =>{
    setText('')
  }
  return (
    <>
        <textarea value={text} onChange={handleVal}>

        </textarea>

        <button className='submit' onClick={handleChange}>Change to Uppercase</button>
        <button className='submit' onClick={handleClear}>Change to Uppercase</button>

        <p>Your string has {text.length} character and {text.split(/\s+/).filter(word => word.length > 0).length} words</p>
    </>
  )
}

export default ConvertUpper