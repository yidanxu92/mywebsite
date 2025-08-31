import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Yidan Xu — Portfolio",
description: "Front-end developer",
metadataBase: new URL("https://example.com"),
openGraph: {
title: "Yidan Xu — Portfolio",
description: "Front-end developer",
url: "/",
siteName: "yidanxu.dev",
images: [
{ url: "/og.png", width: 1200, height: 630 },
],
locale: "en_US",
type: "website",
},
twitter: { card: "summary_large_image", title: "Yidan Xu — Portfolio", description: "Front-end developer & designer." },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" suppressHydrationWarning>
<body className={`${inter.className} antialiased`}>{children}</body>
</html>
);
}