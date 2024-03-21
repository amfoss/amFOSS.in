import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({ subsets: ["latin"] });

export const metadata = {
  title: "amFOSS",
  description: "amFoss Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${sen.className} min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
