import React from 'react';
import WorkRoll from '../../components/WorkRoll';
import SEO from '../../components/SEO';
import '../../scss/page.scss';

const WorkPage = () => (
    <div className="workPage page">
        <SEO title={`Work`} />
        <section className="content">
            <WorkRoll />
        </section>
    </div>
);

export default WorkPage;
