import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Vision, Tokenomics, Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Vision />
    <Tokenomics />
    <Contact />
  </Layout>
);
