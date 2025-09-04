import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  verification: {
  google: 'oeD9QDaCP90daaFp_gF6m9kd0L5gvyZ11u5X9Fihg4o',
  },
    title: {
        template: '%s | Netlify',
        default: 'BeanieOwl Dev'
    }
};

export default function RootLayout({ children }) {
    return (
  <html lang="en" data-theme="business">
        <head>
          <link rel="icon" href="/assets/Favicon.png" sizes="any" />
        </head>
        <body>
          <div className="min-h-screen">
            <div className="site-header container-dev">
              <Header />
            </div>

            <main className="container-dev">{children}</main>

            <div className="container-dev">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    );
}
