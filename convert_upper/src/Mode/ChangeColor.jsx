import { useState } from 'react'

const ChangeColor = () => {
    const [bgColor,setBgColor] = useState({
        backgroundColor:'red',
        color:'#000'
    })
    const [btnText,setBtnText] = useState('Dark Mode')

    const changeColor = () => {
        if(bgColor.backgroundColor == 'red'){
            setBgColor({
                backgroundColor:'black',
                color:'#fff'
            })
            setBtnText('Light Mode')
        }else{
            setBgColor({
                backgroundColor:'red',
                color:'#000'
            })
            setBtnText('Dark Mode')
        }
    }
  return (
    <>
        <div className='mydatae' style={bgColor}>
            <p>In this approach, we will use match() method with the regular expression. The JavaScript String match() method is an inbuilt function in JavaScript used to search a string for a match against any regular expression. So match() will return the array which contains all the string which matches any non-whitespace character.</p>
            <p>In this approach, we will use match() method with the regular expression. The JavaScript String match() method is an inbuilt function in JavaScript used to search a string for a match against any regular expression. So match() will return the array which contains all the string which matches any non-whitespace character.</p>
            <p>In this approach, we will use match() method with the regular expression. The JavaScript String match() method is an inbuilt function in JavaScript used to search a string for a match against any regular expression. So match() will return the array which contains all the string which matches any non-whitespace character.</p>
            <p>In this approach, we will use match() method with the regular expression. The JavaScript String match() method is an inbuilt function in JavaScript used to search a string for a match against any regular expression. So match() will return the array which contains all the string which matches any non-whitespace character.</p>
        </div>
        <button onClick={changeColor}>Change {btnText}</button>
    </>
  )
}

export default ChangeColor