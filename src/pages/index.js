import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, JoinUs, Contact, Projects, About, Team, Events } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Team />
    <Projects />
    <Events />
    <JoinUs />
    <Contact />
  </Layout>
);
