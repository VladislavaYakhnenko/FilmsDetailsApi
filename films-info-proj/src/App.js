import './App.css';
import ParagraphAboba from './components/ParagraphAboba'
import ButtonAbobus from './components/ButtonAbobus'
import InputAboba from './components/InputAboba'
import React from 'react'



function App() {
  const [txtArray, setTxtArray] = React.useState([]);
  const [text, setText] = React.useState("Hello, Dima");

  function addText() {
    setTxtArray([...txtArray, text]);
  }

  function removeText() {
    setTxtArray(txtArray.filter((el) => el !== text));
  }

  return (
    <div className="App">
      <header className="App-header">
        <ParagraphAboba text={text}/>
        <InputAboba setText={setText}/>
        <ButtonAbobus text="Add text" onClick={addText}/>
        <ButtonAbobus text="Remove text" onClick={removeText}/>
        {
          txtArray.map((txt, index) => {
            return <ParagraphAboba key={index} text={txt}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
