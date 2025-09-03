import Link from 'next/link';

export function Footer() {
    return (
        <footer className="site-footer container-dev">
            <p className="meta">
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="underline decoration-dashed underline-offset-4 hover:opacity-80">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
