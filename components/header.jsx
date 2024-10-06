import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/images/beanieowl_logo_100x100.png';

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
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center gap-3">
                <Image src={netlifyLogo} alt="Netlify logo" width={50} height={50} />
                <span className="text-2xl font-bold pt-[10%]">BeanieOwl</span>
            </Link>

            {/* Navigation Links */}
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 no-underline hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
