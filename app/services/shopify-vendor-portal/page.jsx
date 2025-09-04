import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Shopify Vendor/Supplier Portal | BeanieOwl',
  description:
    'Give vendors a secure portal to update product descriptions, images, attributes, and tags. Optional approvals and audit trail. Changes sync seamlessly to Shopify.',
  alternates: { canonical: 'https://beanieowl.com/services/shopify-vendor-portal' },
  openGraph: {
    title: 'Shopify Vendor/Supplier Portal | BeanieOwl',
    description:
      'Custom vendor portal for Shopify: structured forms, optional approvals, and synced updates for product content, images, attributes, and tags.',
    url: 'https://beanieowl.com/services/shopify-vendor-portal',
    siteName: 'BeanieOwl',
    type: 'website',
  },
};

export default function VendorPortalService() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shopify Vendor/Supplier Portal',
    provider: { '@type': 'Organization', name: 'BeanieOwl', url: 'https://beanieowl.com' },
    areaServed: 'Worldwide',
    description:
      'Custom vendor portal for Shopify merchants. Vendors securely update product content, images, attributes, and tags. Optional approval queue and audit trail.',
    url: 'https://beanieowl.com/services/shopify-vendor-portal',
    category: 'Ecommerce Integration',
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>Shopify Vendor/Supplier Portal</h1>
          <p style={styles.subHeading}>
            Let vendors keep your catalog fresh—securely. Structured forms, optional approvals, synced updates.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="#request-demo" style={styles.ctaButton}>Request a demo</a>
          </div>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Why Merchants Use This</h2>
          <ul style={styles.list}>
            <li>Offload product content maintenance to vendors without sharing admin access.</li>
            <li>Keep data clean with structured fields and validation.</li>
            <li>Approve changes before they reach your storefront (optional).</li>
            <li>Full traceability with an audit trail of edits.</li>
          </ul>
        </section>

        <section id="request-demo" style={styles.section}>
          <h2 style={styles.sectionHeading}>Request a Demo</h2>
          <p style={styles.paragraph}>Tell me a bit about your vendor workflow and products. I&#39;ll follow up with a tailored walkthrough.</p>
          {/* Netlify form: identifies as vendor-portal-demo */}
          <form
            name="vendor-portal-demo"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/thank-you"
            style={styles.form}
          >
            <input type="hidden" name="form-name" value="vendor-portal-demo" />
            <input type="hidden" name="service" value="Shopify Vendor/Supplier Portal" />
            <input type="hidden" name="subject" value="Vendor Portal Demo Request" />
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
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" style={styles.input} />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="website">Store URL</label>
              <input id="website" name="website" type="url" placeholder="https://yourstore.myshopify.com" style={styles.input} />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="message">What do you want vendors to edit?</label>
              <textarea id="message" name="message" rows={5} style={styles.textarea} placeholder="Descriptions, images, tags, attributes, variants, approvals…" />
            </div>

            <button type="submit" style={styles.ctaButton}>Send request</button>
            <p style={{ ...styles.paragraph, fontSize: '0.85rem', marginTop: '8px' }}>
              This form uses Netlify Forms. We&#39;ll email you a response shortly.
            </p>
          </form>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>What Vendors Can Update</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Descriptions & Media</h3>
              <p style={styles.paragraph}>Titles, descriptions, feature bullets; single or multiple images with alt text.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Attributes & Tags</h3>
              <p style={styles.paragraph}>Custom attributes, metafields, and tags to support filtering, SEO, and merchandising.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Variants</h3>
              <p style={styles.paragraph}>Variant options and details, with guardrails for consistency and approvals as needed.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Collections</h3>
              <p style={styles.paragraph}>Suggest or update collection assignments where appropriate (optional).</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Built‑In Guardrails</h2>
          <ul style={styles.list}>
            <li>Approval queue per vendor or product group.</li>
            <li>Field‑level validation and required fields.</li>
            <li>Role‑based access and vendor scoping.</li>
            <li>Audit logs and rollback options.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Next Steps</h2>
          <p style={styles.paragraph}>Tell me your vendor workflow. I’ll tailor the portal and wire it into your Shopify store.</p>
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
  mainHeading: { fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem' },
  subHeading: { fontSize: '1.2rem', color: '#a3a3a3' },
  section: { marginBottom: '40px' },
  sectionHeading: { fontSize: '1.8rem', color: '#fff', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #2a2f3a' },
  paragraph: { fontSize: '1rem', marginBottom: '15px', color: '#d1d5db' },
  list: { marginLeft: '20px', marginBottom: '15px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' },
  card: { border: '1px solid #2a2f3a', padding: '20px', borderRadius: '8px', backgroundColor: '#0f172a' },
  cardTitle: { fontSize: '1.2rem', color: '#60a5fa', marginBottom: '10px' },
  ctaButton: { display: 'inline-block', backgroundColor: '#22c55e', color: 'white', padding: '12px 25px', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem', textAlign: 'center', marginTop: '10px' },
  form: { display: 'grid', gap: '14px', maxWidth: '700px' },
  formRow: { display: 'grid', gap: '6px' },
  input: { backgroundColor: '#0b1220', border: '1px solid #2a2f3a', color: '#fff', padding: '10px 12px', borderRadius: '6px' },
  textarea: { backgroundColor: '#0b1220', border: '1px solid #2a2f3a', color: '#fff', padding: '10px 12px', borderRadius: '6px' },
  hiddenField: { display: 'none' },
};
