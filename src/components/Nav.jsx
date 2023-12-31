import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[

        <Link key={1} className='nav-link text light'to="/">
          Home
        </Link>,
        <Link key={2} className='nav-link text light' to="/AboutPage">
          About Me
        </Link>,
        <Link key={3} className='nav-link text light' to="/ProjectPage">
          Projects
        </Link>,
        <Link key={4} className='nav-link text light' to="/ContactPage">
          Contact
        </Link>,
      ]}
    />
  );
}