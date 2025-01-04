import React from "react";
import { Card, Layout, Text, Page, BlockStack, Divider, Box } from "@shopify/polaris";

export default function Documentation() {
  return (
    <Page title="Easy Canonicals: User Guide">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">
              What Does This Do?
            </Text>
            <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
              Easy Canonicals helps you tell search engines which page to show in search
              results when you have similar or duplicate pages. This can improve your
              store&apos;s search rankings and make sure customers find the right pages.
            </Text>
            <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
              Think of it like this:
            </Text>
            <ul>
              <li>
                <strong>Exact Links:</strong> Pick a specific page to prioritize.
              </li>
              <li>
                <strong>Wildcard Rules:</strong> Set one rule to handle multiple similar
                pages.
              </li>
            </ul>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">
              How Do I Use This?
            </Text>
            <BlockStack gap="400">
              <Box>
                <Text variant="headingMd" as="h2">
                  Step 1: Get Started
                </Text>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  When you open the app, you&apos;ll see two options:
                </Text>
                <ul>
                  <li>
                    <strong>Manage Exact Links:</strong> Set a priority page for specific
                    URLs.
                  </li>
                  <li>
                    <strong>Manage Wildcard Links:</strong> Set a rule to handle groups of
                    similar pages.
                  </li>
                </ul>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  Click on the option that works for you!
                </Text>
              </Box>

              <Divider />

              <Box>
                <Text variant="headingMd" as="h2">
                  Step 2: Managing Exact Links
                </Text>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  Use this if you want to tell search engines to prioritize one specific
                  page over another.
                </Text>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  <strong>How To Add a Link:</strong>
                </Text>
                <ol>
                  <li>
                    Click <strong>&quot;Create Single Canonical Link.&quot;</strong>
                  </li>
                  <li>
                    Enter:
                    <ul>
                      <li>
                        <strong>URL Path:</strong> The part of the URL after your store&apos;s
                        domain. Example: <code>/products/blue-shirt</code>.
                      </li>
                      <li>
                        <strong>Canonical URL:</strong> The full URL of the page you want
                        search engines to focus on. Example:{" "}
                        <code>https://yourstore.com/products/blue-shirt</code>.
                      </li>
                    </ul>
                  </li>
                  <li>Click <strong>Save</strong>.</li>
                </ol>
              </Box>

              <Divider />

              <Box>
                <Text variant="headingMd" as="h2">
                  Step 3: Managing Wildcard Links
                </Text>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  Use this when you have many similar pages (like{" "}
                  <code>/collections/summer</code>) and want to set one rule for all of
                  them.
                </Text>
                <Text variant="bodyMd" as="p" style={{ marginTop: "10px" }}>
                  <strong>How To Add a Wildcard Link:</strong>
                </Text>
                <ol>
                  <li>
                    Click <strong>&quot;Create Wildcard Canonical Link.&quot;</strong>
                  </li>
                  <li>
                    Choose how to match your pages:
                    <ul>
                      <li>
                        <strong>Contains:</strong> Match all pages with a word or phrase
                        in the URL (e.g., &quot;summer&quot;).
                      </li>
                      <li>
                        <strong>Starts With:</strong> Match all pages starting with a
                        phrase (e.g., <code>/collections/summer</code>).
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
                        <strong>Canonical URL:</strong> The full URL you want search
                        engines to focus on.
                      </li>
                    </ul>
                  </li>
                  <li>Click <strong>Save</strong>.</li>
                </ol>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">
              FAQs
            </Text>
            <BlockStack gap="300">
              <Box>
                <Text variant="headingSm" as="h4">
                  Why Should I Use This?
                </Text>
                <Text variant="bodyMd" as="p">
                  - Prevent duplicate content: If you have similar pages, this tool helps
                  search engines know which one to show.
                  <br />- Improve rankings: By focusing traffic on a single page, you get
                  better visibility.
                </Text>
              </Box>

              <Divider />

              <Box>
                <Text variant="headingSm" as="h4">
                  What&apos;s the Difference Between Exact and Wildcard Links?
                </Text>
                <Text variant="bodyMd" as="p">
                  - <strong>Exact Links:</strong> For individual pages.
                  <br />- <strong>Wildcard Links:</strong> For groups of similar pages
                  (e.g., <code>/collections/summer</code>).
                </Text>
              </Box>

              <Divider />

              <Box>
                <Text variant="headingSm" as="h4">
                  What Happens If I Mess Up?
                </Text>
                <Text variant="bodyMd" as="p">
                  Don&apos;t worry! You can always edit or delete any links you&apos;ve added.
                </Text>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">
              Quick Tips
            </Text>
            <ul>
              <li>
                Make sure the <strong>URL Path</strong> starts with <code>/</code> (like{" "}
                <code>/products/blue-shirt</code>).
              </li>
              <li>
                The <strong>Canonical URL</strong> must be a full link (like{" "}
                <code>https://yourstore.com/products/blue-shirt</code>).
              </li>
              <li>
                If you&apos;re unsure, start with Exact Links—they&apos;re easier!
              </li>
            </ul>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">
              Need Help?
            </Text>
            <Text variant="bodyMd" as="p">
              If you&apos;re stuck or have questions, reach out to us:
            </Text>
            <ul>
              <li>
                <strong>Email:</strong> support@yourstore.com
              </li>
              <li>
                <strong>Chat:</strong> Available in the app.
              </li>
            </ul>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
