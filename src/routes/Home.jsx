import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Carrosel from '../components/Carrosel';
import Jackpot from '../components/Jackpot';
import Filter from '../components/Filter';
import Game from '../components/Game';
import Footer from '../components/Footer';

const Home = () => {
  const [games, setGames] = useState([]);

  const warnRef = useRef(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/games.json');
        if (!response.ok) {
          throw new Error('Falha ao carregar os jogos');
        }
        const data = await response.json();
        // Aqui, definimos games como o array de jogos do JSON
        setGames(data.games); // Assumindo que 'games' é a chave correta no JSON
        console.log(data);
      } catch (error) {
        console.error('Erro ao carregar os jogos:', error);
      }
    };

    fetchGames();
  }, []);

  const showWarning = () => {
    warnRef.current.style.display = 'flex';

    // Set a timeout to hide the warning after 2 seconds
    setTimeout(() => {
      warnRef.current.style.display = 'none';
    }, 3000); // 2000 milliseconds = 2 seconds
  }

  return (
    <div className='limited-space'>
      <div className='home-content'>
        <Carrosel />
        <Jackpot />
        <div className='search-game'>
          <input className='search-input' type="text" placeholder='Por favor insira o nome do jogo' />
        </div>
        <Filter />
        <span className='warn-game' ref={warnRef}><i class="bi bi-exclamation-triangle-fill" id='warn-icon'></i> Entre e faça o primeiro depósito para jogar.</span>
        <div className='games-organize' onClick={showWarning}>
          {games.map((elem, index) => (
            <Game key={index} image={elem.img} name={elem.name}/>
          ))}
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default Home;
