import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"]})
export const metadata: Metadata = {
	metadataBase: new URL("https://lvato.com/"),
	title: {
		template: "%s | Abdul Rehman",
		default: "Abdul Rehman",
	},
	authors: {
		name: "abdulrehman",
	},

	description:
		"Based in Pakistan, I'm a Fullstack developer passionate about builing a modern web application that users love.",
	openGraph: {
		title: "Abdul Rehman",
		description:
			"Based in Pakistan, I'm a Fullstack developer passionate about builing a modern web application that users love.",
		siteName: "Abdul Rehman",
		images: "/og.png",
		type: "website",
	},
	keywords: ["lvato studio","web coding", "alpha coder", "abdulrehman"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  )
}