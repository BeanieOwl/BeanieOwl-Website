// pages/services/shopify-recharge-fix.js

import Head from 'next/head';
import Link from 'next/link'; // If you want to link to a contact page, for example

export default function ShopifyRechargeFixPage() {
  return (
    <>
      <Head>
        <title>Shopify-Recharge Product ID Fix | Your Company Name</title>
        <meta
          name="description"
          content="Resolve Shopify product ID changes affecting your Recharge autoship subscriptions automatically."
        />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>Shopify-Recharge Product ID Fix</h1>
          <p style={styles.subHeading}>
            Keep Your Autoship Subscriptions Running Smoothly
          </p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>The Problem: Broken Autoships</h2>
          <p style={styles.paragraph}>
            If you use Shopify and Recharge for your subscriptions, you might
            have encountered a frustrating issue: when a product or its
            variants are updated or recreated in Shopify, the underlying
            Product ID can change.
          </p>
          <p style={styles.paragraph}>
            Recharge relies on this specific Product ID for its autoship
            orders. When it changes, Recharge can no longer find the correct
            product, leading to:
          </p>
          <ul style={styles.list}>
            <li>Failed subscription orders</li>
            <li>Customer complaints and confusion</li>
            <li>Manual, time-consuming fixes</li>
            <li>Potential loss of recurring revenue</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Our Solution: Automated ID Sync</h2>
          <p style={styles.paragraph}>
            Our service provides an automated fix for this misalignment. We
            implement a system that:
          </p>
          <ol style={styles.list}>
            <li>Monitors your Recharge subscriptions for errors related to incorrect Product IDs.</li>
            <li>When an error is detected, it uses the product SKU (which remains consistent) to look up the correct, current Product ID in Shopify.</li>
            <li>Automatically updates the Recharge subscription with the new, correct Product ID.</li>
          </ol>
          <p style={styles.paragraph}>
            This ensures your autoship orders continue to process correctly,
            saving you time, reducing customer churn, and protecting your
            revenue.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Use Cases & Who Benefits</h2>
          <div style={styles.useCasesGrid}>
            <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>Merchants with Frequently Updated Products</h3>
              <p style={styles.paragraph}>
                If you regularly update product details, bundle products, or
                manage a large catalog where variants might be recreated, this
                service prevents those changes from breaking active
                subscriptions.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>Stores Migrating or Restructuring Shopify Data</h3>
              <p style={styles.paragraph}>
                During a store migration or a significant product catalog
                overhaul (e.g., using import/export tools that might regenerate IDs),
                this fix ensures your existing Recharge subscriptions don't fail en masse.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>Subscription Box Businesses</h3>
              <p style={styles.paragraph}>
                If your subscription box contents change regularly and you
                sometimes need to create new product entries or variants in Shopify
                for those items, this ensures the correct items are pulled into
                Recharge orders.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>Businesses Aiming to Reduce Manual Admin</h3>
              <p style={styles.paragraph}>
                If your team spends valuable time manually identifying and
                correcting these Product ID errors in Recharge, our automated
                solution frees up that time for more strategic tasks.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>High-Volume Subscription Stores</h3>
              <p style={styles.paragraph}>
                The more subscriptions you have, the greater the impact of
                Product ID errors. Our automated fix scales with your business,
                minimizing disruptions for a large customer base.
              </p>
            </div>
             <div style={styles.useCaseCard}>
              <h3 style={styles.useCaseTitle}>Anyone Using Product Bundling Apps</h3>
              <p style={styles.paragraph}>
                If you use apps that create bundle products, these sometimes result in new product IDs.
                Our service can help ensure that if these bundled items are part of a subscription,
                the link to Recharge remains intact even if the underlying product IDs change.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Ready to Fix Your Autoships?</h2>
          <p style={styles.paragraph}>
            Stop worrying about broken subscriptions and lost revenue. Let us
            implement this automated solution for your Shopify and Recharge
            setup.
          </p>
          {/* Example Call to Action - Link to a contact page or Calendly */}
          <Link href="/contact" legacyBehavior>
            <a style={styles.ctaButton}>Get in Touch for a Consultation</a>
          </Link>
          {/* Or, if you have a direct purchase/setup process:
          <Link href="/checkout/shopify-recharge-fix" legacyBehavior>
            <a style={styles.ctaButton}>Implement Fix Now</a>
          </Link>
          */}
        </section>

        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

// Basic inline styles - replace with your preferred styling solution
const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee',
  },
  mainHeading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  section: {
    marginBottom: '40px',
  },
  sectionHeading: {
    fontSize: '1.8rem',
    color: '#34495e',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #ecf0f1',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#555',
  },
  list: {
    marginLeft: '20px',
    marginBottom: '15px',
  },
  useCasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  useCaseCard: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  useCaseTitle: {
    fontSize: '1.2rem',
    color: '#2980b9',
    marginBottom: '10px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 25px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    textAlign: 'center',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  // Add hover style for button if not using a CSS solution that handles it
  // ctaButtonHover: { // You'd need to manage this with state in React for inline styles or use CSS
  //   backgroundColor: '#2980b9',
  // },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    fontSize: '0.9rem',
    color: '#7f8c8d',
  },
};
