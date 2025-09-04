import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    // { linkText: 'Home', href: '/' },
    // { linkText: 'Revalidation', href: '/revalidation' },
    // { linkText: 'Image CDN', href: '/image-cdn' },
    // { linkText: 'Edge Function', href: '/edge' },
    // { linkText: 'Blobs', href: '/blobs' },
    // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex items-center justify-between w-full">
            <div className="logo">
                <Link href="/" className="flex items-center gap-3 no-underline">
                    {/* Use static path from public/ images directory */}
                    <Image src="/images/BeanieOwl_logo.png" alt="BeanieOwl logo" width={48} height={48} />
                    <span>BeanieOwl</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link href="/services" className="no-underline text-[color:var(--muted)] hover:text-white">
                    Services
                </Link>
                <Link href="/contact" className="no-underline text-[color:var(--muted)] hover:text-white">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
