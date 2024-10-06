import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';

// Dummy content for the about me section
const aboutMeText = `
## About Me

Hi, I'm a developer who enjoys working on cool projects. 
I'm passionate about JavaScript, React, and making things work seamlessly.

Below you'll find links to my projects and a Privacy Policy.
`;

// Dummy content for privacy policy
const privacyPolicyText = `
## Privacy Policy

Your privacy is important to us. We do not collect or share personal information without your consent.
Feel free to contact us if you have any questions.
`;

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4">
        <h1>About Me</h1>
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="flex flex-col gap-4">
        <Markdown content={aboutMeText} />
      </section>

      {/* Sample Card for Placeholder */}
      <section className="flex flex-col gap-4">
        <Card title="Unreal Engine Project" text="More details coming soon" />
        <Card title="Shopify Apps" text="Shopfiy Apps I've Created." />
      </section>
    </main>
  );
}

// Privacy Policy Page
export function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <header className="flex justify-between items-center py-4">
        <h1>Privacy Policy</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="flex flex-col gap-4">
        <Markdown content={privacyPolicyText} />
      </section>
    </main>
  );
}
