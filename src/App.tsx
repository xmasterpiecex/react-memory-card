import { useEffect, useState } from 'react';
import Game from './components/game';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [idsArray, setIdsArray] = useState<number[]>([]);
  const [winCount, setWinCount] = useState<number>(9);

  const allPicturesOfPokemons = async () => {
    const some = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=40'
    );
    const only = await some.data;

    const allPokemons = [];
    for (const pokemon of only.results) {
      const responPoke = await axios.get(pokemon.url);
      const allPoke = await responPoke.data;
      allPokemons.push(allPoke);
      console.log(allPoke);
    }
    setData(allPokemons);
  };

  const shuffle = (id: number) => {
    data.sort(() => Math.random() - 0.5);

    setIdsArray([...idsArray, id]);
    setWinCount(i => i + 1);

    if (idsArray.includes(id)) {
      setIdsArray([]);
      setWinCount(0);
    }
  };

  if (winCount === 10) {
    window.alert('YOU WIN');
    setIdsArray([]);
    setWinCount(0);
  }

  useEffect(() => {
    allPicturesOfPokemons();
  }, []);

  return (
    <>
      <h1>Best SCORE 10/{winCount}</h1>
      <div className='game-view'>
        <div className='game-container'>
          <Game data={data} shuf={shuffle} />
        </div>
      </div>
    </>
  );
}

export default App;
