import "./globals.css"

import type { Metadata } from "next"
import { Oswald, Roboto } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { cn } from "@/lib/utils"

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
    <html lang="en" className="bg-gray-200">
      <body
        className={cn(
          oswald.variable,
          roboto.variable,
          "bg-background mx-auto w-full max-w-[1920px]",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
