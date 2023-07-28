import { GoogleAnalyticsScript } from "@components/GoogleAnalyticsScript/GoogleAnalyticsScript";
import "./globals.scss";
import "@suits/ss-design-system/dist/ss-components/styles/css/global.css";
import { Inter } from "next/font/google";
import { OneTrustCookieBannerScript } from "@components/OneTrustCookieBannerScript/OneTrustCookieBannerScript";
import { Header } from "@components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.suitsupply.com" />
        <link rel="dns-prefetch" href="https://cdn.suitsupply.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://stm.suitsupply.com" />

        <link
          rel="preload"
          href="https://cdn.suitsupply.com/fonts/gt-america/gt-america-standard-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://cdn.suitsupply.com/fonts/gt-america/gt-america-standard-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://cdn.suitsupply.com/fonts/gt-america/gt-america-standard-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss19/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss19/favicons/android-chrome-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss19/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss19/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss19/favicons/favicon-16x16.png"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
        {process.env.NEXT_PUBLIC_GTM ? <GoogleAnalyticsScript /> : null}
        {process.env.NEXT_ONETRUEST_ID ? <OneTrustCookieBannerScript /> : null}
      </body>
    </html>
  );
}
