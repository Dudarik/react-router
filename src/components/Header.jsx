import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className='light-green darken-1'>
      <div className='nav-wrapper'>
        <Link to='./' className='brand-logo'>
          React Router
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/Dudarik/react-router'>
              Github
            </a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contacts</Link>
          </li>
          <li>
            <Link to='/movies/42'>Movies 42</Link>
          </li>
          <li>
            <Link to='/movies/24'>Movies 24</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
