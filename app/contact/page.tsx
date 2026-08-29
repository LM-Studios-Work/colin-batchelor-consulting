'use client'

import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-page-intro">
        <p className="eyebrow">START A CONVERSATION</p>
        <h1>Tell me what needs moving forward.</h1>
        <p className="contact-page-lede">Share the essentials below and Colin will respond directly.</p>
      </section>

      <section className="contact-form-section" aria-labelledby="contact-form-heading">
        <div className="contact-form-heading">
          <p className="contact-form-label">CONTACT FORM</p>
          <h2 id="contact-form-heading">A clear brief is a good place to begin.</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="contact-form-row">
            <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="contact-form-row">
            <label htmlFor="organisation">Organisation</label>
            <input id="organisation" name="organisation" type="text" autoComplete="organization" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="message">How can Colin help? <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" rows={6} required />
          </div>
          <div className="contact-form-submit">
            {submitted && <p className="contact-form-success" role="status">Thank you. Your message is ready to be followed up directly.</p>}
            <button type="submit" className="contact-button">Send enquiry <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </section>
    </main>
  )
}
