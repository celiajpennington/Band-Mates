// Nav Tabs for the home page only. Will contain "About, Create Account, Log In". Create Account and Log In will redirect to another page, About will redirect to the bottome of the page where the "About Me" section will live.
import React from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabsHome({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('about')}
          // Check to see if the currentPage is `create post`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('login')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'login' ? 'nav-link active' : 'nav-link'}
        >
          Log In
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('signup')}
          // Check to see if the currentPage is `create post`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'signup' ? 'nav-link active' : 'nav-link'}
        >
          Sign Up
        </a>
      </li>
      </ul>
  )}

  export default NavTabsHome;