import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({ subsets: ["latin"] });

export const metadata = {
  title: "amFOSS | INDIA'S LONGEST-RUNNING FOSS & COMPUTER SCIENCE CLUB",
  description: "amFoss Official Website",
  icons: {
    icon: "/assets/icons/amfoss.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
        {/* Umami Tag Manager */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="3d92ff66-a2b0-4a36-b7ac-402c70ff6cb3"></script>
        {/* End Umami Tag Manager */}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${sen.className} min-h-screen`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZQ4MW46"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
