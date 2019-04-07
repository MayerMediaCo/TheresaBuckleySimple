import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <section className="section">
          <ContactForm />
      </section>
    </div>
  </Layout>
)

export default Contact
