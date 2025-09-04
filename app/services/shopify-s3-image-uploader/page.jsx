import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Shopify S3 Image Uploader (SKU-based) | BeanieOwl',
  description:
    'Upload product images to Amazon S3 using SKU-based filenames and foldering. A simple, merchant-friendly uploader wired for your existing sync process.',
  alternates: { canonical: 'https://beanieowl.com/services/shopify-s3-image-uploader' },
  openGraph: {
    title: 'Shopify S3 Image Uploader (SKU-based) | BeanieOwl',
    description:
      'A custom uploader that puts product images into your S3 bucket with SKU-based naming so your Shopify sync can pick them up automatically.',
    url: 'https://beanieowl.com/services/shopify-s3-image-uploader',
    siteName: 'BeanieOwl',
    type: 'website',
  },
};

export default function ShopifyS3UploaderService() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shopify S3 Image Uploader (SKU-based)',
    provider: { '@type': 'Organization', name: 'BeanieOwl', url: 'https://beanieowl.com' },
    areaServed: 'Worldwide',
    description:
      'Custom image uploader for Shopify merchants using Amazon S3. Merchants or vendors upload images named by SKU so downstream syncs can attach them to products/variants.',
    url: 'https://beanieowl.com/services/shopify-s3-image-uploader',
    category: 'Ecommerce Integration',
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>Shopify S3 Image Uploader (SKU-based)</h1>
          <p style={styles.subHeading}>
            A focused uploader for teams that store images in Amazon S3 with filenames matching SKU. Clean inputs, safe writes, audit trail.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="#request-info" style={styles.ctaButton}>Request info</a>
          </div>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Who This Helps</h2>
          <ul style={styles.list}>
            <li>Stores with an existing S3 image pipeline keyed by SKU.</li>
            <li>Teams that want a simple, non-technical uploader for staff or vendors.</li>
            <li>Catalogs that rely on predictable filename/paths (e.g., SKU.jpg or SKU/angle1.jpg).</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>What You Get</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>SKU-aware uploads</h3>
              <p style={styles.paragraph}>Drop files and map to product/variant SKUs with basic validation and hints.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>S3 write safety</h3>
              <p style={styles.paragraph}>Guardrails for overwrites, optional versioning folders, and MIME checks.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Activity trace</h3>
              <p style={styles.paragraph}>Basic logging (who uploaded what/when) to help audits and vendor QA.</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Fits your sync</h3>
              <p style={styles.paragraph}>We align naming and folder rules to match your existing Shopify import/sync.</p>
            </div>
          </div>
        </section>

        <section id="request-info" style={styles.section}>
          <h2 style={styles.sectionHeading}>Request Info</h2>
          <p style={styles.paragraph}>Tell me how your S3 image sync is set up and the SKU conventions you use.</p>
          {/* Netlify form: identifies as s3-image-uploader */}
          <form
            name="s3-image-uploader"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/thank-you"
            style={styles.form}
          >
            <input type="hidden" name="form-name" value="s3-image-uploader" />
            <input type="hidden" name="service" value="Shopify S3 Image Uploader (SKU-based)" />
            <input type="hidden" name="subject" value="S3 Image Uploader Request" />
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
              <label htmlFor="message">How are images named and where should they go?</label>
              <textarea id="message" name="message" rows={5} style={styles.textarea} placeholder="e.g., SKU.jpg or SKU/1.jpg and SKU/2.jpg; bucket/path; overwrite rules" />
            </div>

            <button type="submit" style={styles.ctaButton}>Send</button>
            <p style={{ ...styles.paragraph, fontSize: '0.85rem', marginTop: '8px' }}>
              This form uses Netlify Forms. We’ll email you a response shortly.
            </p>
          </form>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Next Steps</h2>
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
