import { Markdown } from '../components/markdown';

// Dummy content for the about me section
const aboutMeText = `
## Welcome!

Hi, I'm a developer who enjoys working on cool projects. 
I'm passionate about JavaScript, React, and making things work seamlessly.
`;

export default function AboutPage() {
  return (
    <main className="hero">
      <div className="container-dev">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="hero-title">Welcome!</h1>
            <p className="hero-sub">Hi, I'm a developer who enjoys working on cool projects. I'm passionate about JavaScript, React, and making things work seamlessly.</p>
            <div className="mt-6">
              <a className="btn btn-primary" href="#">Get in touch</a>
            </div>
          </div>

          <div>
            <div className="card-glass">
              <Markdown content={aboutMeText} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
