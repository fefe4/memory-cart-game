import React, {useState} from 'react';
import angel from './img/angel.png';
import archer from './img/archer.png';
import darkAngel from './img/darkAngel.png';
import darkAngelFemale from './img/darkAngelFemale.png';
import demon from './img/demon.png';
import espartan from './img/espartan.png';
import hammer from './img/hammer.png';
import karateGuy from './img/karateGuy.png';
import paladin from './img/paladin.png';
import priest from './img/priest.png';
import rogue from './img/rogue.png';
import shieldWarrior from './img/shieldWarrior.png';
import succubus from './img/succubus.png';
import viking from './img/viking.png';
import warlock from './img/warlock.png';
import wizard from './img/wizard.png';

const Game = () => {
  const [score, setScore] = useState (0);
  const [highScore, setHighScore] = useState (0);
  const [cardsClicked, setCardsClicked] = useState ([]);
  const [images, setImages] = useState([angel,archer,darkAngel,darkAngelFemale, demon, espartan, hammer, karateGuy, paladin, priest, succubus, viking, warlock, wizard, rogue, shieldWarrior]);

  const _ = require("lodash"); 

  const shuffleImages = () => {
    setImages( _.shuffle(images)); 
  }   

  const changeScore = (e) => {
    let counter = 0;
    const id = e.target.id;
    for (let card in cardsClicked) {
      if (cardsClicked[card] === id){
        counter = counter + 1
        console.log(counter);
      } 
    }

    if (counter === 0) {setScore(score+1);}
    else {setScore(0); setCardsClicked([])}
  }
  const storeCards = (e) => {
    setCardsClicked(cardsClicked.concat(e.target.id));
    console.log(cardsClicked)
  }
 

 
  
  return (
    <div>
      <h3>Score:{score} HighScore:{highScore}</h3>
      <div className="gridBox">
        <img src={images[0]} id={images[0]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[1]} id={images[1]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[2]} id={images[2]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[3]} id={images[3]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[4]} id={images[4]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[5]} id={images[5]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[6]} id={images[6]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[7]} id={images[7]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[8]} id={images[8]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[9]} id={images[9]}  onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[10]} id={images[10]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[11]} id={images[11]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[12]} id={images[12]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[13]} id={images[13]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[14]} id={images[14]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}  className="App-" alt="" />
        <img src={images[15]} id={images[15]} onClick={ (e)=>{changeScore(e);storeCards(e); shuffleImages();}}c lassName="App-" alt="" />
      </div>
    </div>
  );
};

export default Game;