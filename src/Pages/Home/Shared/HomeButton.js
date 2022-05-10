import React from 'react';

const HomeButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary ">{children}</button>
    );
};

export default HomeButton;