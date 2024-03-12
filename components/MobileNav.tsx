"use client"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-scroll"

import { cn } from "@/lib/utils"

import ConnectWallet from "./ConnectWallet"

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -90 },
  { name: "how to buy", target: "how-to-buy", offset: -90 },
  { name: "tokenomics", target: "tokenomics", offset: -90 },
  { name: "roadmap", target: "roadmap", offset: -90 },
]

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={cn(isMobile && "active")}
            className="cursor-pointer transition-all duration-300 hover:text-primary_light/90"
          >
            {link.name}
          </Link>
        )
      })}
      <div className="flex w-full items-center justify-center">
        <ConnectWallet />
      </div>
    </nav>
  )
}

export default MobileNav
