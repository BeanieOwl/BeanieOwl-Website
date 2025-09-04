import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Shopify + Recharge + Klaviyo Integrations | BeanieOwl',
  description:
    'Integrations and automations across Shopify, Recharge, and Klaviyo—events, segments, flows, and data hygiene so campaigns and subscriptions stay in sync.',
  alternates: { canonical: 'https://beanieowl.com/services/shopify-recharge-klaviyo' },
  openGraph: {
    title: 'Shopify + Recharge + Klaviyo Integrations | BeanieOwl',
    description:
      'Wire up meaningful events and reliable data so Klaviyo flows and segments drive subscription growth without manual work.',
    url: 'https://beanieowl.com/services/shopify-recharge-klaviyo',
    siteName: 'BeanieOwl',
    type: 'website',
  },
};

export default function StackIntegrationsService() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shopify + Recharge + Klaviyo Integrations',
    provider: { '@type': 'Organization', name: 'BeanieOwl', url: 'https://beanieowl.com' },
    areaServed: 'Worldwide',
    description:
      'Practical integrations across Shopify, Recharge, and Klaviyo—get reliable events, segments, flows, and cleanup your subscription data.',
    url: 'https://beanieowl.com/services/shopify-recharge-klaviyo',
    category: 'Ecommerce Integration',
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>Shopify + Recharge + Klaviyo Integrations</h1>
          <p style={styles.subHeading}>Align events, segments, and flows so marketing and subscriptions work together.</p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Common Outcomes</h2>
          <ul style={styles.list}>
            <li>Proper subscription lifecycle events into Klaviyo</li>
            <li>Segmentation for active/cancelled/paused subscribers</li>
            <li>Flows for churn save, winback, and upsell</li>
            <li>Cleaner data and fewer broken automations</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>What I Do</h2>
          <ul style={styles.list}>
            <li>Identify the events and customer attributes your flows need</li>
            <li>Map and verify the data across Shopify, Recharge, and Klaviyo</li>
            <li>Set up or refine flows and segments for growth and retention</li>
            <li>Add safeguards and simple monitoring to catch regressions</li>
          </ul>
        </section>

        <section id="request-info" style={styles.section}>
          <h2 style={styles.sectionHeading}>Request Help</h2>
          <form
            name="stack-integrations"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/thank-you"
            style={styles.form}
          >
            <input type="hidden" name="form-name" value="stack-integrations" />
            <input type="hidden" name="service" value="Shopify + Recharge + Klaviyo Integrations" />
            <input type="hidden" name="subject" value="Stack Integrations Request" />
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
              <label htmlFor="message">What do you want to improve?</label>
              <textarea id="message" name="message" rows={5} style={styles.textarea} placeholder="Events, segments, flows, data hygiene, churn save, winback…" />
            </div>

            <button type="submit" style={styles.ctaButton}>Send</button>
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
