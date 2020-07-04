import React from 'react';
import { graphql } from 'gatsby';
import ArtRoll from '../../components/ArtRoll';
import SEO from '../../components/SEO';
import '../../scss/page.scss';

const ArtPage = ({ data }) => (
    <div className="artPage page">
        <SEO title={`Art`} />
        <section className="content">
            <ArtRoll />
        </section>
    </div>
);
export default ArtPage;

export const artPageQuery = graphql`
    query ArtQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
