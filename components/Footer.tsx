import Image from "next/image"
import Link from "next/link"

import { config } from "@/config"

import { Button } from "./ui/button"
import Icons from "./ui/icons"

type IconData = {
  href: string
  name: "solscan" | "twitter" | "telegram" | "dexscreener" | "dextools"
}

const iconsArray: IconData[] = [
  { href: config.x, name: "twitter" },
  { href: config.telegram, name: "telegram" },
  { href: config.solscan, name: "solscan" },
  { href: config.dexscreener, name: "dexscreener" },
  { href: config.dextools, name: "dextools" },
]

const Footer = () => {
  return (
    <footer className="h-full w-full bg-violet-950 text-violet-100">
      <div className="container flex h-full flex-col justify-between gap-8 py-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image src="/img/logo/logo.png" width={80} height={80} alt="logo" />
          <p className="text-center md:px-48">
            ClumsyCat ($CLAWZ) is a community-driven token with no formal team.
            Also, $CLAWZ is a meme token with no intrinsic value or expectation
            of financial return. It is intended purely for entertainment
            purposes, and there is no guarantee that its value will increase
            over time. We advise that you only use your funds to engage with
            $CLAWZ if you can afford to do so without incurring any financial
            harm, and we recommend consulting with a financial advisor before
            engaging with any cryptocurrency. The value of $CLAWZ may fluctuate
            significantly, and we make no representation of its future
            performance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2   sm:flex-row sm:justify-between">
          <div>
            <p>ClumsyCat &copy; 2024 All Rights Reserved.</p>
          </div>

          {/* Email but probably not needed
          
          <div className="mb-4 sm:mb-0"> 
            <a href="mailto:clumsycat.sol@gmail.com" className="underline">
              Contact Us
            </a>
          </div> 
          
          */}
          <div className="flex items-center gap-4">
            {iconsArray.map((icon, index) => (
              <Link
                key={icon.name}
                href={icon.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  size="icon"
                  className="flex h-5 w-5 items-center justify-center shadow-none"
                >
                  <Icons name={icon.name} />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
