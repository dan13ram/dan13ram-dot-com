import React, { useState } from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../utils/SiteMetadata';
import Logo from './Logo';

import { Icon } from '@iconify/react';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';
import githubOutlined from '@iconify/icons-ant-design/github-outlined';
import '../scss/navBar.scss';

const Navbar = ({ title }) => {
    const { social } = useSiteMetadata();
    const [open, toggleOpen] = useState(false);

    return (
        <nav className={open ? 'navBar open' : 'navBar'}>
            <Link
                to="/"
                className="navLogo"
                title={title}
                onClick={() => {
                    toggleOpen(open => false);
                }}
            >
                <Logo />
            </Link>
            <div
                className="navMenu"
                onClick={() => {
                    toggleOpen(open => false);
                }}
            >
                <Link className="navItem" to={`/work`}>
                    work
                </Link>
                <Link className="navItem" to={`/art`}>
                    art
                </Link>
                {/*<Link className="navItem" to={`/blog`}>
                    blog
                </Link>*/}
                <Link className="navItem" to={`/about`}>
                    about
                </Link>
            </div>
            {/* <div className="switchContainer"> */}
            {/*     <label className="switch"> */}
            {/*         <input */}
            {/*             type="checkbox" */}
            {/*             defaultChecked={theme} */}
            {/*             onChange={changeTheme} */}
            {/*         /> */}
            {/*         <span className="slider round"></span> */}
            {/*     </label> */}
            {/* </div> */}
            <div className="social">
                <a
                    href={`https://my.metagame.wtf/player/${social.metagame}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon metagame"></span>
                </a>
                <a
                    href={`https://github.com/${social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="icon github" icon={githubOutlined} />
                </a>
                <a
                    href={`https://instagram.com/${social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon instagram"></span>
                </a>
                <a
                    href={`https://twitter.com/${social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="icon twitter" icon={twitterOutlined} />
                </a>
            </div>
            <div
                className="navToggle"
                onClick={() => {
                    toggleOpen(open => !open);
                }}
            >
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
