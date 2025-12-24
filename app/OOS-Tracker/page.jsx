// app/OOS-Tracker/page.jsx

export const metadata = {
  title: "Privacy Policy | OOS Tracker",
};

export default function Page() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: "#555" }}>Last updated: 24 December 2025</p>

      <p>
        <strong>OOS Tracker</strong> (the “App”) is operated by{" "}
        <strong>Beanie Owl</strong> (“we”, “our”, “us”). This Privacy Policy
        explains how we collect, use, and protect information when merchants
        install and use the App with their Shopify store.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Product and variant information, including SKUs and inventory levels</li>
        <li>Inventory events related to products going out of stock or being restocked</li>
        <li>Order data required to calculate sales averages</li>
        <li>Store metadata such as store name, plan, and currency</li>
        <li>App usage information for billing and support</li>
      </ul>
      <p>
        We do not intentionally collect customer personal data such as names,
        email addresses, payment details, or shipping addresses.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Track out-of-stock events and calculate their duration</li>
        <li>Display inventory insights within the app dashboard</li>
        <li>Generate reports and CSV exports</li>
        <li>Maintain app functionality and billing</li>
        <li>Provide customer support</li>
      </ul>

      <h2>Data Storage and Security</h2>
      <p>
        We store data securely and restrict access to authorised systems. We take
        reasonable measures to protect your data from unauthorised access or misuse.
      </p>

      <h2>Data Retention</h2>
      <p>
        Data is retained only while the App is installed or as needed to provide
        functionality. You may request deletion of your data at any time.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The App integrates with Shopify’s APIs and complies with Shopify’s data
        protection requirements. No data is shared with third parties for
        advertising or marketing.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your data by
        contacting us. Data is deleted after uninstall within a reasonable timeframe.
      </p>

      <h2>Changes</h2>
      <p>
        This Privacy Policy may be updated from time to time. Changes take effect
        when posted.
      </p>

      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:tom@beanieowl.com">tom@beanieowl.com</a>
      </p>
    </main>
  );
}
