import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#viewallposts"
          onClick={() => handlePageChange('viewallposts')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'viewallposts' ? 'nav-link active' : 'nav-link'}
        >
          View All Posts
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#createpost"
          onClick={() => handlePageChange('createpost')}
          // Check to see if the currentPage is `create post`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'createpost' ? 'nav-link active' : 'nav-link'}
        >
          Create Post
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#viewmyposts"
          onClick={() => handlePageChange('viewmyposts')}
          // Check to see if the currentPage is `viewmyposts`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'viewmyposts' ? 'nav-link active' : 'nav-link'}
        >
          View My Posts
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('dashboard')}
          // Check to see if the currentPage is `dashboard`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#logout"
          onClick={() => handlePageChange('HomePage')}
          // Check to see if the currentPage is `dashboard`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}
        >
          Log Out
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
