import React from 'react';
import '../../scss/page.scss';
import '../../scss/aboutPage.scss';
import Content from '../../components/Content';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({
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

export const AboutPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <AboutPageTemplate
                avatarImage={data.avatarImage}
                content={widgetFor('body')}
                title={data.title}
            />
        );
    } else {
        return <div>Loading...</div>;
    }
};
