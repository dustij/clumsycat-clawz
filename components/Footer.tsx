import Image from "next/image"
import Link from "next/link"

import { config } from "@/config"

import { Button } from "./ui/button"
import Icons from "./ui/icons"

const Footer = () => {
  // TODO: remove pb-80
  return (
    <footer className="h-full w-full bg-violet-950 pb-80 text-violet-100">
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
          <div className="flex items-center">
            <Link href={config.x} rel="noopener noreferrer" target="_blank">
              <Button size="icon" className="shadow-none">
                <Icons name="twitter" />
              </Button>
            </Link>
            <Link
              href={config.telegram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button size="icon" className="shadow-none">
                <Icons name="telegram" />
              </Button>
            </Link>
            <Link
              href={config.solscan}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button size="icon" className="shadow-none">
                <Icons name="solscan" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
