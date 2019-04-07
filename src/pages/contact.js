import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <div className="section">
        <h1 className="title has-text-centered">Contact Me</h1>
      </div>
      <section className="section">
        <ContactForm />
      </section>
    </div>
  </Layout>
)

export default Contact
