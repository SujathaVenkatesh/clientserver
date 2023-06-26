import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link, useHistory } from 'react-router-dom';
import logo6 from './images/logo6.png';
import './Nav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [hideWhoWeAre, setHideWhoWeAre] = useState(false); // New state

  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSignUpClick = () => {
    closeMobileMenu();
    history.push('/Signup');
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleServicesClick = () => {
    setHideWhoWeAre(true); // Hide "Who we are" navbar when Services button is clicked
    closeMobileMenu();
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo6} className='logo' alt='Logo' />
            <div className="footer-left">
        <h2>
          Why <span>Global Services</span>
        </h2>
        </div>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                What we do
              </Link>
            </li>
            <li className='nav-item'>
              {!hideWhoWeAre && ( // Conditionally render "Who we are" navbar based on hideWhoWeAre state
                <a href="#suja" className='nav-links'>
                  Who we are
                </a>
              )}
            </li>
            <li className='nav-item'>
              <Link
                to='/Services'
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                  handleServicesClick(); // Call handleServicesClick to hide "Who we are" navbar
                }}
              >
                Services
              </Link>
            </li>
           
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to='/Signup' className='nav-links-mobile' onClick={handleSignUpClick}>
                Join our team
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={handleSignUpClick}>
              Join our team
            </Button>
          )}
        </div>
      </nav>

      {/* Add the second navbar here */}
      <nav className='navbar-events'>
        <div className='navbar-container-events'>
          {/* NavbarEvents content */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
