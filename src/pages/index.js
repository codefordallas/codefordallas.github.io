import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, About, Team } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Team />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
