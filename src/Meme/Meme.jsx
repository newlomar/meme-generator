import { useState } from 'react';
import response from '../memesdata.js';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(response.data.memes);

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomMemeUrl() {
    const index = getRandomInteger(0, 99);
    const url = response.data.memes[index].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  return (
    <main className='main'>
      <div>
        <section className='main__inputs'>
          <input className='input' type='text' placeholder='Top text' />
          <input className='input' type='text' placeholder='Bottom text' />
        </section>
        <button onClick={getRandomMemeUrl} className='button' type='submit'>
          Get new meme image
        </button>
      </div>
      <div className='main__image'>
        <img src={meme.randomImage} alt='' />
      </div>
    </main>
  );
}
