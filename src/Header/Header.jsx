import logo from '../assets/troll_face.png';

export default function Header() {
  return (
    <header className='header'>
      <ul className='header__ul'>
        <li>
          <img className='logo' src={logo} alt='troll face meme' />
          <h1>Meme Generator</h1>
        </li>
        <li>
          <h3>React Course - Development Knowledge Improvement</h3>
        </li>
      </ul>
    </header>
  );
}
