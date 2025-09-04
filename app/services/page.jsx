export const metadata = {
  title: 'Services | BeanieOwl',
  description: 'Automation services for Shopify and Recharge integrations.'
};

export default function ServicesIndex() {
  return (
    <main className="py-16">
      <div className="container-dev">
        <h1 className="hero-title">Services</h1>
        <p className="hero-sub max-w-2xl">Automation and integrations that keep your subscriptions and storefronts running smoothly.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a href="/services/shopify-recharge-productid" className="card-glass block no-underline hover:opacity-95 transition">
            <h2 className="text-xl font-bold text-white">Shopify–Recharge Variant ID Auto‑Fix</h2>
            <p className="mt-2 text-[color:var(--muted)]">When a Shopify product or variant changes, the Variant ID can change and Recharge throws errors. I automate the fix by reconciling SKUs to the new Variant IDs and updating subscriptions.</p>
            <div className="mt-4">
              <span className="btn btn-primary">Learn more</span>
            </div>
          </a>

          <a href="/services/shopify-vendor-portal" className="card-glass block no-underline hover:opacity-95 transition">
            <h2 className="text-xl font-bold text-white">Shopify Vendor/Supplier Portal</h2>
            <p className="mt-2 text-[color:var(--muted)]">Custom supplier portal for merchants—let vendors update product details, images, attributes, and tags with optional approvals. Changes sync back to Shopify seamlessly.</p>
            <div className="mt-4">
              <span className="btn btn-primary">Learn more</span>
            </div>
          </a>

          <a href="/services/shopify-s3-image-uploader" className="card-glass block no-underline hover:opacity-95 transition">
            <h2 className="text-xl font-bold text-white">Shopify S3 Image Uploader (SKU-based)</h2>
            <p className="mt-2 text-[color:var(--muted)]">For stores using Amazon S3 to store product images named by SKU, I provide a simple uploader that drops images into your bucket in the right place—ready for your sync.</p>
            <div className="mt-4">
              <span className="btn btn-primary">Learn more</span>
            </div>
          </a>
            <a href="/services/seo-audit" className="card-glass block no-underline hover:opacity-95 transition">
              <h2 className="text-xl font-bold text-white">SEO Audit</h2>
              <p className="mt-2 text-[color:var(--muted)]">Technical and on‑page audit for Shopify storefronts: indexation, crawl budget, Core Web Vitals, internal links, schema, and quick‑win fixes.</p>
              <div className="mt-4">
                <span className="btn btn-primary">Learn more</span>
              </div>
            </a>

            <a href="/services/shopify-recharge-klaviyo" className="card-glass block no-underline hover:opacity-95 transition">
              <h2 className="text-xl font-bold text-white">Shopify + Recharge + Klaviyo Integrations</h2>
              <p className="mt-2 text-[color:var(--muted)]">Integrations and automations across your stack—events, segments, flows, and data hygiene so campaigns and subscriptions work in sync.</p>
              <div className="mt-4">
                <span className="btn btn-primary">Learn more</span>
              </div>
            </a>
        </div>
      </div>
    </main>
  );
}
