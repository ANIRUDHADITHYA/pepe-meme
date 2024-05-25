import './App.css';
import { useState } from "react";

function App() {

  const [background, setBackground] = useState(false);
  const [pepe, setPepe] = useState(false);
  const [pant, setPant] = useState(false);

  return (
    <div className="App">
      <div className="trump-meme-maker-container">
        <div className="navbar-container">
          <div className="logo-wrapper">
            <img src="/Asserts/pepe/1.png"></img>
          </div>
          <h1>PEPE GEN</h1>
        </div>
        <div className="create-meme-container">
          <h1>Pepe Meme Maker</h1>
          <div className="crete-meme-display-container">
            <div className="meme-mirror-container">
              <div className="meme-mirror-wrapper">
                {background ? <img src={`/Asserts/background/${background}.png`} className='background'></img> : <img src={`/Asserts/background/1.png`}></img>}
                {pepe ? <img src={`/Asserts/pepe/${pepe}.png`} className='pepe'></img> : ""}
                {pant ? <img src={`/Asserts/pant/${pant}.png`} className='pant'></img> : ""}
                <div className='transperent'></div>
              </div>
            </div>
            <div className="meme-items-container">
              <h2>CREATE YOUR TRUMP</h2>
              <h3>Background</h3>
              <div className='trump--item-container background'>
                <img src={'/Asserts/background/1.png'} onClick={() => { setBackground(1) }}></img>
                <img src={'/Asserts/background/2.png'} onClick={() => { setBackground(2) }}></img>
                <img src={'/Asserts/background/3.png'} onClick={() => { setBackground(3) }}></img>
              </div>
              <h3>Pepe</h3>
              <div className='trump--item-container pepe'>
                <img src={'/Asserts/pepe/1.png'} onClick={() => { setPepe(1) }}></img>
                <img src={'/Asserts/pepe/2.png'} onClick={() => { setPepe(2) }}></img>
                <img src={'/Asserts/pepe/3.png'} onClick={() => { setPepe(3) }}></img>
              </div>
              <h3>Pant</h3>
              <div className='trump--item-container pant'>
                <img src={'/Asserts/pant/1.png'} onClick={() => { setPant(1) }}></img>
                <img src={'/Asserts/pant/2.png'} onClick={() => { setPant(2) }}></img>
                <img src={'/Asserts/pant/3.png'} onClick={() => { setPant(3) }}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
