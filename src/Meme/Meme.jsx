import response from '../memesdata.js';

export default function Meme() {
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomMemeUrl() {
    const index = getRandomInteger(0, 99);
    const url = response.data.memes[index].url;
    console.log(url);
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
    </main>
  );
}
