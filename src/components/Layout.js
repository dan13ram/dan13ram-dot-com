import React, {useEffect, useRef} from 'react';
import SEO from './SEO';
import Footer from './Footer';
import Navbar from './Navbar';
import '../scss/all.scss';
import '../scss/layout.scss';
import useSiteMetadata from '../utils/SiteMetadata';

const Layout = ({ children }) => {
    const { title, social } = useSiteMetadata();
    const mainRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            mainRef.current &&
                mainRef.current.scrollIntoView({
                    behavior: 'auto',
                    block: 'start',
                });
        }, 50);
    }, [children]);
    return (
        <div className="layout">
            <SEO title={title} titleTemplate={title} />
            <Navbar title={title} />
            <main className="main" ref={mainRef}>
                <div className="pageContainer" id="top">{children}</div>
                <Footer title={title} social={social} />
            </main>
        </div>
    );
};

export default Layout;
