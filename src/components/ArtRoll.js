import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import '../scss/artRoll.scss';

class ArtRoll extends React.Component {
    render() {
        const { data, featured } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="artRoll">
                {posts &&
                    posts.map(({ node: post }) => {
                        if (featured && !post.frontmatter.featuredItem) {
                            return null;
                        }
                        return (
                            <Link
                                to={post.fields.slug}
                                key={post.id}
                                className=
                                         'rollItem'
                            >
                                <BackgroundImage
                                    fluid={
                                        post.frontmatter.featuredImage
                                            .childImageSharp.fluid
                                    }
                                    className="itemContainer"
                                >
                                    <div className="itemContent">
                                        <p className="center itemTitle">
                                            {post.frontmatter.title}
                                        </p>
                                        <p className="center itemDate">
                                            {post.frontmatter.date}
                                        </p>
                                    </div>
                                </BackgroundImage>
                            </Link>
                        );
                    })}
            </div>
        );
    }
}

ArtRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query ArtRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "art-collection" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                description
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredItem
                                featuredImage {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <ArtRoll data={data} count={count} />}
    />
);
