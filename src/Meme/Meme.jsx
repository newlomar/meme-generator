export default function Meme() {
  return (
    <main className='main'>
      <form>
        <section className='main__inputs'>
          <input className='input' type='text' placeholder='Top text' />
          <input className='input' type='text' placeholder='Bottom text' />
        </section>
        <button className='button' type='submit'>
          Get new meme image
        </button>
      </form>
    </main>
  );
}
