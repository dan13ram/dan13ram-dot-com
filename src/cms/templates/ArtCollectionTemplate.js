import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import '../../scss/artCollection.scss';

export const ArtCollectionTemplate = ({
    title,
    description,
    content,
    tags,
    helmet,
}) => {
    const headerRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            headerRef.current &&
                headerRef.current.scrollIntoView({
                    behavior: 'auto',
                    block: 'end',
                });
        }, 50);
    }, []);
    return (
        <div className="artCollection">
            {helmet || ''}

            <article className="container">
                <header ref={headerRef}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </header>

                <div className="content">
                    {content && content.length ? (
                        <div className="contentInner">
                            {content.map((item, index) => (
                                <div key={index} className="contentItem">
                                    {/* <p>{item.title}</p> */}
                                    {/* <p>{item.description}</p> */}
                                    <PreviewCompatibleImage
                                        className="contentImage"
                                        imageInfo={{
                                            image: item.image,
                                            alt: item.title,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </article>
            <footer>
                {tags && tags.length ? (
                    <div>
                        <h4>Tags</h4>
                        <ul className="taglist">
                            {tags.map(tag => (
                                <li key={tag + `tag`}>
                                    <Link to={`/tags/${kebabCase(tag)}/`}>
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </footer>
        </div>
    );
};

ArtCollectionTemplate.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.array,
    helmet: PropTypes.object,
    tags: PropTypes.array,
};

export const ArtCollectionPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags']);
    const entryContent = entry.getIn(['data', 'content']);
    const content = entryContent ? entryContent.toJS() : [];

    return (
        <ArtCollectionTemplate
            content={content}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
            description={entry.getIn(['data', 'description'])}
        />
    );
};
