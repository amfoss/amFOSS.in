import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({ subsets: ["latin"] });

export const metadata = {
  title: "amFOSS | INDIA'S LEADING FOSS & COMPUTER SCIENCE CLUB",
  description: "amFOSS is a vibrant club at Amrita Vishwa Vidyapeetham, Amritapuri campus, driving advancements in open-source development, cybersecurity, and technological innovation",
  icons: {
    icon: "/assets/icons/amfoss_bulb_white.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${sen.className} min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
