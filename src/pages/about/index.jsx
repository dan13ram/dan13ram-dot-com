import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Content, { HTMLContent } from '../../components/Content';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import '../../scss/page.scss';
import '../../scss/aboutPage.scss';

export const AboutPageTemplate = ({
    title,
    content,
    contentComponent,
    avatarImage,
    helmet,
}) => {
    const PageContent = contentComponent || Content;

    return (
        <div className="aboutPage page">
            {helmet || ''}

            <section className="about-me">
                <div className="title">about me</div>
                <PreviewCompatibleImage
                    className="avatar"
                    imageInfo={{
                        image: avatarImage,
                    }}
                />
                <PageContent className="content" content={content} />
            </section>
        </div>
    );
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
    const { markdownRemark } = data;
    return (
        <AboutPageTemplate
            contentComponent={HTMLContent}
            avatarImage={markdownRemark.frontmatter.avatarImage}
            title={markdownRemark.frontmatter.title}
            content={markdownRemark.html}
            helmet={<SEO title={`About`} />}
        />
    );
};

export default AboutPage;

export const aboutQuery = graphql`
    query AboutPageQuery {
        markdownRemark(frontmatter: { pageKey: { eq: "about" } }) {
            html
            frontmatter {
                title
                avatarImage {
                    childImageSharp {
                        fluid(maxWidth: 300, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
