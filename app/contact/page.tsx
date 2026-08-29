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
        <div>
          <p className="eyebrow">START A CONVERSATION</p>
          <h1>Let&apos;s discuss what the programme needs next.</h1>
        </div>
        <p className="contact-page-lede">Share a little about the challenge, the assignment or the decision in front of you. Colin will respond directly.</p>
      </section>

      <section className="contact-form-section" aria-labelledby="contact-form-heading">
        <div className="contact-form-aside">
          <p className="contact-form-label">CONTACT</p>
          <h2 id="contact-form-heading">A clear brief is a good place to begin.</h2>
          <p>Whether a project needs direction, recovery or an experienced pair of hands, send the essentials below.</p>
          <a className="contact-email" href="mailto:colin@colinbatchelor.com">colin@colinbatchelor.com <span>↗</span></a>
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
