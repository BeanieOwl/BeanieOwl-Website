import React from "react";

export default function Documentation() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Easy Canonicals: User Guide</h1>

      <section style={{ marginBottom: "20px" }}>
        <h2>What Does This Do?</h2>
        <p>
          Easy Canonicals helps you tell search engines which page to show in search
          results when you have similar or duplicate pages. This can improve your
          store&apos;s search rankings and make sure customers find the right pages.
        </p>
        <p>Think of it like this:</p>
        <ul>
          <li><strong>Exact Links:</strong> Pick a specific page to prioritize.</li>
          <li><strong>Wildcard Rules:</strong> Set one rule to handle multiple similar pages.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>How Do I Use This?</h2>

        <h3>Step 1: Get Started</h3>
        <p>When you open the app, you&apos;ll see two options:</p>
        <ul>
          <li><strong>Manage Exact Links:</strong> Set a priority page for specific URLs.</li>
          <li><strong>Manage Wildcard Links:</strong> Set a rule to handle groups of similar pages.</li>
        </ul>
        <p>Click on the option that works for you!</p>

        <h3>Step 2: Managing Exact Links</h3>
        <p>Use this if you want to tell search engines to prioritize one specific page over another.</p>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>
            When two or more pages on your site have the same or similar content, and you
            want search engines to focus on one specific page.
          </li>
          <li>For example, you have a product available in two categories:</li>
        </ul>
        <p style={{ fontStyle: "italic" }}>
          Example: <br />
          URL 1: <code>https://yourstore.com/collections/summer/products/blue-shirt</code> <br />
          URL 2: <code>https://yourstore.com/collections/sale/products/blue-shirt</code> <br />
          Use an Exact Link to tell search engines to prioritize: <br />
          <code>https://yourstore.com/products/blue-shirt</code>.
        </p>

        <p><strong>How To Add a Link:</strong></p>
        <ol>
          <li>Click <strong>&quot;Create Single Canonical Link.&quot;</strong></li>
           <img 
    src="/images/Wildcard_Highlight.png" 
    alt="Wildcard Example Highlight" 
    style={{ maxWidth: "100%", height: "auto", margin: "10px 0" }} 
  />
          <li>
            Enter:
            <ul>
              <li>
                <strong>URL Path:</strong> The part of the URL after your store&apos;s domain.
                Example: <code>/collections/summer/products/blue-shirt</code>.
              </li>
              <li>
                <strong>Canonical URL:</strong> The full URL of the page you want search
                engines to focus on. Example: <code>https://yourstore.com/products/blue-shirt</code>.
              </li>
            </ul>
          </li>
          <li>Click <strong>Save</strong>.</li>
        </ol>

        <h3>Step 3: Managing Wildcard Links</h3>
        <p>
          Use this when you have many similar pages (like <code>/collections/summer</code>)
          and want to set one rule for all of them.
        </p>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>
            When multiple pages share a common structure or pattern, and you want search
            engines to prioritize one primary URL.
          </li>
          <li>For example, you run seasonal collections and want to point them to a single page:</li>
        </ul>
        <p style={{ fontStyle: "italic" }}>
          Example: <br />
          Match all pages starting with: <code>/collections/summer</code>. <br />
          Prioritize the canonical URL: <code>https://yourstore.com/collections/summer</code>.
        </p>

        <p><strong>How To Add a Wildcard Link:</strong></p>
        <ol>
          <li>Click <strong>&quot;Create Wildcard Canonical Link.&quot;</strong></li>
          <li>
            Choose how to match your pages:
            <ul>
              <li>
                <strong>Contains:</strong> Match all pages with a word or phrase in the URL
                (e.g., &quot;summer&quot;).
              </li>
              <li>
                <strong>Starts With:</strong> Match all pages starting with a phrase
                (e.g., <code>/collections/summer</code>).
              </li>
              <li>
                <strong>Ends With:</strong> Match all pages ending with a phrase
                (e.g., &quot;-sale&quot;).
              </li>
            </ul>
          </li>
          <li>
            Enter:
            <ul>
              <li>
                <strong>Pattern:</strong> The part of the URL you want to match.
                Example: <code>/collections/summer</code>.
              </li>
              <li>
                <strong>Canonical URL:</strong> The full URL you want search engines to focus on.
              </li>
            </ul>
          </li>
          <li>Click <strong>Save</strong>.</li>
        </ol>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>FAQs</h2>

        <h3>Why Should I Use This?</h3>
        <p>
          - Prevent duplicate content: If you have similar pages, this tool helps search
          engines know which one to show.
          <br />- Improve rankings: By focusing traffic on a single page, you get better
          visibility.
        </p>

        <h3>What&apos;s the Difference Between Exact and Wildcard Links?</h3>
        <p>
          - <strong>Exact Links:</strong> For individual pages.
          <br />- <strong>Wildcard Links:</strong> For groups of similar pages
          (e.g., <code>/collections/summer</code>).
        </p>

        <h3>What Happens If I Mess Up?</h3>
        <p>Don&apos;t worry! You can always edit or delete any links you&apos;ve added.</p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Quick Tips</h2>
        <ul>
          <li>Make sure the <strong>URL Path</strong> starts with <code>/</code> (like <code>/products/blue-shirt</code>).</li>
          <li>The <strong>Canonical URL</strong> must be a full link (like <code>https://yourstore.com/products/blue-shirt</code>).</li>
          <li>If you&apos;re unsure, start with Exact Links—they&apos;re easier!</li>
        </ul>
      </section>

      <section>
        <h2>Need Help?</h2>
        <p>If you&apos;re stuck or have questions, reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> support@yourstore.com</li>
          <li><strong>Chat:</strong> Available in the app.</li>
        </ul>
      </section>
    </div>
  );
}
