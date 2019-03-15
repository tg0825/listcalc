import React from 'react';
import Header from './Header';

const Tmpl = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Tmpl;
