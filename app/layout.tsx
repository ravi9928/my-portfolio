import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raviraj Singh - Backend Developer",
  description:
    "Welcome to my portfolio! I am a passionate backend developer building scalable, secure, and high-performance applications. Specializing in API development, databases, and cloud deployment, I create reliable systems that power seamless digital experiences.",
  keywords: [
    "Backend Developer",
    "Full Stack Developer",
    "API Development",
    "Database Management",
    "System Architecture",
    "Cloud Deployment",
    "CI/CD Pipelines",
    "Server Optimization",
    "PHP",
    "Laravel",
    "Node.js",
    "Express.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "REST API",
    "SOAP API",
    "MySQL",
    "Redis",
    "Third Party Integrations",
    "Raviraj Singh",
  ],

  authors: [{ name: "Raviraj Singh" }],
  creator: "Raviraj Singh",
  openGraph: {
    title: "Raviraj Singh - Backend Developer Portfolio",
    description:
      "Passionate backend developer crafting scalable, secure, and high-performance applications. Explore my projects showcasing API development, database management, and cloud deployment expertise.",
    url: "https://your-domain.com",
    siteName: "Raviraj Singh - Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1863971514669809664/FeharVli_400x400.jpg",
        width: 1200,
        height: 630,
        alt: "Raviraj Singh - Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raviraj Singh - Backend Developer",
    description:
      "Passionate Backend developer creating exceptional webapplications. Explore my projects and app development expertise.",
    creator: "@Raviraj91986672",
    images: ["https://pbs.twimg.com/profile_images/1863971514669809664/FeharVli_400x400.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />

      </body>
    </html>
  );
}
