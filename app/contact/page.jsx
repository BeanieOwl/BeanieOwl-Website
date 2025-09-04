export const metadata = {
  title: 'Contact | BeanieOwl',
  description: 'Get in touch with BeanieOwl. Send us a message and we&#39;ll get back to you.',
};

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <p className="text-[color:var(--muted)] mb-8">
        Have a question or need help? Send us a message and we&#39;ll get back to you soon.
      </p>

      {/* Netlify form: uses data-netlify and a honeypot to reduce spam */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact/thank-you"
        className="space-y-6"
      >
        {/* Hidden input required by Netlify to identify the form */}
        <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="subject" value="New Contact Submission" />
        {/* Honeypot field */}
        <p className="hidden">
          <label>
            Don&#39;t fill this out if you&#39;re human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md bg-[color:var(--muted-bg)] text-white border border-[color:var(--muted)]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md bg-[color:var(--muted-bg)] text-white border border-[color:var(--muted)]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full rounded-md bg-[color:var(--muted-bg)] text-white border border-[color:var(--muted)]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          />
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      <p className="text-xs text-[color:var(--muted)] mt-6">
        This form is protected by Netlify Forms. We&#39;ll email a copy to our team.
      </p>
    </section>
  );
}
