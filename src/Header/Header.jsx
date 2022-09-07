import logo from '../assets/troll_face.png';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo-h1'>
        <img className='logo' src={logo} alt='troll face meme' />
        <h1 className='h1'>Meme Generator</h1>
      </div>
      <div>
        <h3 className='h3'>React Course - Development Knowledge Improvement</h3>
      </div>
    </header>
  );
}
