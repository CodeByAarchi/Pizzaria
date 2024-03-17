import React from 'react';
import Header from '../client/Header/Header';
import NewsletterForm from './Login/NewsLatter/NewsLatter';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            
            <main>
                {children}
            </main>
            <NewsletterForm />
           <Footer/>

        </div>
    );
};

export default Layout;
