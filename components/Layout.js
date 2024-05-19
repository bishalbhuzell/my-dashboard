// components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './content';

const Layout = ({ children }) => {
  return (
    <>
    <div>
      <Sidebar />
        <Navbar />
        {/* <main>{children}hello</main> */}
        <Content/>
    </div>
    </>
  );
}

export default Layout;
