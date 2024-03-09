import "./globals.css"

import type { Metadata } from "next"
import { Oswald, Roboto } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "ClumsyCat",
  description: "Official website of ClumsyCat",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
