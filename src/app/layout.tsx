import type { Metadata } from "next";
import { Familjen_Grotesk, Jost, Playfair_Display, Urbanist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ACT Foundation | A.C.T Today, Transform Tomorrow",
  description:
    "ACT Foundation delivers life-changing support through Cancer and Sickle Cell advocacy, education, and care programs. Join us in making a difference.",
  keywords: [
    "ACT Foundation",
    "nonprofit",
    "sickle cell",
    "cancer awareness",
    "health education",
    "community support",
    "charity",
    "Nigeria",
    "healthcare",
    "RMC",
    "Renal Medullary Carcinoma",
  ],
  authors: [{ name: "ACT Foundation" }],
  creator: "ACT Foundation",
  publisher: "ACT Foundation",
  openGraph: {
    title: "ACT Foundation | A.C.T Today, Transform Tomorrow",
    description:
      "ACT Foundation delivers life-changing support through Cancer and Sickle Cell advocacy, education, and care programs.",
    url: "https://actfoundation.org",
    siteName: "ACT Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT Foundation | A.C.T Today, Transform Tomorrow",
    description:
      "ACT Foundation delivers life-changing support through Cancer and Sickle Cell advocacy, education, and care programs.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${familjenGrotesk.variable} ${jost.variable} ${playfairDisplay.variable} ${urbanist.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <LoadingScreen minimumLoadTime={2500} />
        {children}
      </body>
    </html>
  );
}
