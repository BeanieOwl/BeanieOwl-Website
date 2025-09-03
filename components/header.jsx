import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from '/public/assets/beanieowl_logo_100x100.png';

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
                    <Image src={netlifyLogo} alt="BeanieOwl logo" width={48} height={48} />
                    <span>BeanieOwl</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                {/* Future nav items */}
            </div>
        </nav>
    );
}
