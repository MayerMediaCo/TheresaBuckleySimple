import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'

import Content from '../components/content'

import MapContainer from '../components/mapContainer'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`O-Shot`, `Cosmetic Surgery`, `Theresa Buckley`]}
    />
    <Header />
    <Content />
    <MapContainer />
  </Layout>
)

export default IndexPage
