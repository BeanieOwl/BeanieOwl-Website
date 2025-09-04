import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'SEO Audit for Shopify | BeanieOwl',
  description:
    'Technical and on-page SEO audit for Shopify: indexation, crawl budget, CWV, internal linking, schema, and prioritized fixes.',
  alternates: { canonical: 'https://beanieowl.com/services/seo-audit' },
  openGraph: {
    title: 'SEO Audit for Shopify | BeanieOwl',
    description:
      'Deep-dive SEO audit for Shopify storefronts with prioritized issues and quick-win fixes across technical and on-page factors.',
    url: 'https://beanieowl.com/services/seo-audit',
    siteName: 'BeanieOwl',
    type: 'website',
  },
};

export default function SeoAuditService() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Audit for Shopify',
    provider: { '@type': 'Organization', name: 'BeanieOwl', url: 'https://beanieowl.com' },
    areaServed: 'Worldwide',
    description:
      'Technical and on-page SEO audit for Shopify stores. Findings are prioritized with practical fixes for fast impact.',
    url: 'https://beanieowl.com/services/seo-audit',
    category: 'SEO',
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>SEO Audit for Shopify</h1>
          <p style={styles.subHeading}>Identify issues, prioritize fixes, and improve organic performance.</p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>What I Review</h2>
          <ul style={styles.list}>
            <li>Indexation, sitemaps, robots directives</li>
            <li>Crawl budget, crawl errors, duplicate content</li>
            <li>Core Web Vitals and performance basics</li>
            <li>Internal linking and navigation</li>
            <li>Structured data (schema.org) and rich result eligibility</li>
            <li>On-page: titles, meta, headings, content quality</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Deliverables</h2>
          <ul style={styles.list}>
            <li>Prioritized issue list with severity and expected impact</li>
            <li>Quick-win fixes you can apply immediately</li>
            <li>Implementation notes for your theme/apps</li>
            <li>Optional follow-up to assist with fixes</li>
          </ul>
        </section>

        <section id="request-info" style={styles.section}>
          <h2 style={styles.sectionHeading}>Request an Audit</h2>
          <form
            name="seo-audit"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/thank-you"
            style={styles.form}
          >
            <input type="hidden" name="form-name" value="seo-audit" />
            <input type="hidden" name="service" value="SEO Audit for Shopify" />
            <input type="hidden" name="subject" value="SEO Audit Request" />
            <p style={styles.hiddenField}>
              <label>Don&#39;t fill this out: <input name="bot-field" /></label>
            </p>

            <div style={styles.formRow}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required style={styles.input} />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required style={styles.input} />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="website">Store URL</label>
              <input id="website" name="website" type="url" placeholder="https://yourstore.myshopify.com" style={styles.input} />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="message">Anything specific to cover?</label>
              <textarea id="message" name="message" rows={5} style={styles.textarea} placeholder="Collections, theme issues, performance focus, etc." />
            </div>

            <button type="submit" style={styles.ctaButton}>Request audit</button>
          </form>
        </section>

        <section style={styles.section}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={styles.ctaButton}>Talk to BeanieOwl</Link>
            <Link href="/services" style={{ ...styles.ctaButton, backgroundColor: '#6366f1' }}>More Services</Link>
          </div>
        </section>
      </div>
    </>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '20px', color: '#e5e7eb' },
  header: { textAlign: 'center', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid #2a2f3a' },
  mainHeading: { fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem' },
  subHeading: { fontSize: '1.1rem', color: '#a3a3a3' },
  section: { marginBottom: '40px' },
  sectionHeading: { fontSize: '1.4rem', color: '#fff', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #2a2f3a' },
  paragraph: { fontSize: '1rem', marginBottom: '15px', color: '#d1d5db' },
  list: { marginLeft: '20px', marginBottom: '15px' },
  ctaButton: { display: 'inline-block', backgroundColor: '#22c55e', color: 'white', padding: '12px 25px', textDecoration: 'none', borderRadius: '5px', fontSize: '1.05rem', textAlign: 'center', marginTop: '10px' },
  form: { display: 'grid', gap: '14px', maxWidth: '700px' },
  formRow: { display: 'grid', gap: '6px' },
  input: { backgroundColor: '#0b1220', border: '1px solid #2a2f3a', color: '#fff', padding: '10px 12px', borderRadius: '6px' },
  textarea: { backgroundColor: '#0b1220', border: '1px solid #2a2f3a', color: '#fff', padding: '10px 12px', borderRadius: '6px' },
  hiddenField: { display: 'none' },
};
