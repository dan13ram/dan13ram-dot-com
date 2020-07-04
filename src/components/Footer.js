import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ title }) => {
    const scrollToTop = () => {
        window.setTimeout(() => {
            document
                .querySelector('#top')
                .scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    return (
        <footer className="footer">
            <span className="top" onClick={scrollToTop}>
                {'\ufe3f'}
            </span>
            {' © '}
            <Link to={`/`}>{title}</Link>
            {' ' + new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
