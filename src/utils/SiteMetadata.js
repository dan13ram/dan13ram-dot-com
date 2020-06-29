import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                        author {
                            name
                            summary
                        }
                        siteUrl
                        social {
                            twitter
                            linkedIn
                            instagram
                            youtube
                            vimeo
                            github
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
