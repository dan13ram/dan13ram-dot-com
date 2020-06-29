import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ title }) => {
    return (
        <footer className="footer">
            <a href="#top" className="top">
                {'\ufe3f'}
            </a>
            {' © '}
            <Link to={`/`}>{title}</Link>
            {' ' + new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
