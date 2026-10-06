import { useState } from 'react'
import './App.css'

function App() {
  const [ inputText, setInputText ] = useState('');

  function displayedInputText(event) {
    setInputText(event.target.value);
  }

   const wordCount = inputText.length;

  return (
    <>
      <input className='input-text js-input-text' value={inputText} type='text' onChange={displayedInputText}/>
      <p>{inputText}</p>
      
      <p className="word-count">{wordCount} characters</p>
    </>
  )
}

export default App
