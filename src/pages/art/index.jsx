import React from 'react';
import ArtRoll from '../../components/ArtRoll';
import SEO from '../../components/SEO';
import '../../scss/page.scss';

const ArtPage = () => (
    <div className="artPage page">
        <SEO title={`Art`} />
        <section className="content">
            <ArtRoll />
        </section>
    </div>
);

export default ArtPage;
