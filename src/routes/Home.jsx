import React, { useState, useEffect } from 'react';
import './Home.css';
import Carrosel from '../components/Carrosel';
import Jackpot from '../components/Jackpot';
import Filter from '../components/Filter';
import Game from '../components/Game';
import Footer from '../components/Footer';

const Home = () => {
  const [games, setGames] = useState([]);

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

  return (
    <div className='limited-space'>
      <div className='home-content'>
        <Carrosel />
        <Jackpot />
        <div className='search-game'>
          <input className='search-input' type="text" placeholder='Por favor insira o nome do jogo' />
        </div>
        <Filter />
        <div className='games-organize'>
          {games.map((elem, index) => (
            <Game key={index} image={elem.img} name={elem.name} />
          ))}
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default Home;
