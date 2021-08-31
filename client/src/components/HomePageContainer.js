import React, { useState } from 'react';
import NavTabsHome from './NavTabsHome';
import HomePage from './HomePage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


export default function HomeContainer() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'HomePage') {
      return <HomePage />;
    }
    if (currentPage === 'LogIn') {
      return <LogIn />;
    }
    if (currentPage === 'SignUp') {
      return <SignUp />;
    }
    // //default page
    // return <Homepage/>;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabsHome currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
};
