// src/components/layouts/BaseLayout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BaseLayout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);

export default BaseLayout;
