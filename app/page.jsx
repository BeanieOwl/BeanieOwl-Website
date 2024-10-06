import { Markdown } from 'components/markdown';

// Dummy content for the about me section
const aboutMeText = `
## Welcome!

Hi, I'm a developer who enjoys working on cool projects. 
I'm passionate about JavaScript, React, and making things work seamlessly.
`;

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4">
        
      </header>

      {/* Main Content Section */}
      <section className="flex flex-col gap-4">
        <Markdown content={aboutMeText} />
      </section>
    </main>
  );
}
