// src/pages/NotFound.js
import React from 'react';
import { Navbar } from '../component/navbar';

export const NotFound = () => {
  return (
    <div>
        <Navbar />
        <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>

  );
};

