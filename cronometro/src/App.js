import './App.css';
import { useState } from 'react';

function App() {

  //let goloC = 0;
  let [goloC, setGoloC] = useState(0);
  //let goloF = 0;
  let [goloF, setGoloF] = useState(0);
  let faltaC = 0;
  let faltaF = 0;
  let periodo = 1;

  //keyboard Key press event to add goal to home team
  document.addEventListener('keydown', function(event){
    if(event.key === "1"){
      setGoloC(goloC + 1);
    }
  });

  //keyboard key press event to remove goal from home team
  document.addEventListener('keydown', function(event){
    if(event.key === "o"){
      if(goloC > 0){
        setGoloC(goloC - 1);
      }  
    }
  });

  //keyboard Key press event to add goal to away team
  document.addEventListener('keydown', function(event){
    if(event.key === "2"){
      setGoloF(goloF + 1);
    }
  });

  //keyboard key press event to remove goal from away team
  document.addEventListener('keydown', function(event){
    if(event.key === "p"){
      if(goloF > 0){
        setGoloF(goloF - 1);
      }  
    }
  });



  return (
    <div className="cronometro">
      <div className="relogio">
      </div>
      <div className="contadorG">
        <div className="equipas">
          <div className="equipaCasa">
            <p className="nome">UNIÃO 1919</p>
          </div>
          <div className="equipaFora">
            <p className="nomeF">FORA</p>
          </div>
        </div>
        <div className="golos">
          <div className="goloCasa">
            <p className="goloC">{goloC}</p>
          </div>
          <div className="periodo">
            <p className="periodText">Período</p>
            <p className="period">{periodo}</p>
          </div>
          <div className="goloFora">
            <p className="goloF">{goloF}</p>
          </div>
        </div>
      </div>
      <div className="faltas">
          <div className="faltasCasa">
            <p className="periodText">Faltas</p>
            <p className="faltaC">{faltaC}</p>
          </div>
          <div className="faltasFora">
            <p className="periodText">Faltas</p>
            <p className="faltaF">{faltaF}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
