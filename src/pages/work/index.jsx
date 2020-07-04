import React from 'react';
import { graphql } from 'gatsby';
import WorkRoll from '../../components/WorkRoll';
import SEO from '../../components/SEO';
import '../../scss/page.scss';

const WorkPage = ({ data }) => (
    <div className="workPage page">
        <SEO title={`Work`} />
        <section className="content">
            <WorkRoll />
        </section>
    </div>
);
export default WorkPage;

export const workPageQuery = graphql`
    query WorkQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
