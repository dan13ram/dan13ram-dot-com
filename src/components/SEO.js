import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../utils/SiteMetadata';
import { Helmet } from 'react-helmet';
import logo from '../../static/img/logo.svg';
import { withPrefix } from 'gatsby';

const SEO = ({ description, lang, meta, title, titleTemplate }) => {
    const siteMetadata = useSiteMetadata();
    const metaDescription = description || siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={titleTemplate || `%s | ${siteMetadata.title}`}
            link={[{ rel: 'icon', type: 'image/svg+xml', href: logo }]}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: siteMetadata.social.twitter,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `theme-color`,
                    content: `#fff`,
                },
                {
                    name: `msapplication-TileColor`,
                    content: `#fff`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: `${withPrefix(`/`)}img/logo.svg`,
                },
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    titleTemplate: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    titleTemplate: PropTypes.string,
};

export default SEO;
