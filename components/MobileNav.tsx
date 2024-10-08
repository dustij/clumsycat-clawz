"use client"

import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "react-responsive"
import { Link as ScrollLink } from "react-scroll"

import { cn } from "@/lib/utils"

import ConnectWallet from "./ConnectWallet"

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -70 },
  { name: "How To Buy", target: "how-to-buy", offset: -70 },
  { name: "Tokenomics", target: "tokenomics", offset: -70 },
  { name: "Roadmap", target: "roadmap", offset: -70 },
  { name: "Whitepaper", target: "https://docs.clumsycatsol.com", offset: -70 },
]

const MobileNav = ({
  containerStyles,
  navState,
}: {
  containerStyles: string
  navState: [boolean, Dispatch<SetStateAction<boolean>>]
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const [_, setOpenNav] = navState
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => {
        if (link.name === "Whitepaper") {
          return (
            <Link
              key={index}
              href={link.target}
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer transition-all hover:text-primary_light/90"
            >
              {link.name}
            </Link>
          )
        } else {
          return (
            <ScrollLink
              onClick={() => setOpenNav(false)}
              key={index}
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass={cn(isMobile && "active")}
              className="cursor-pointer transition-all hover:text-primary_light/90"
            >
              {link.name}
            </ScrollLink>
          )
        }
      })}
      <div className="flex w-full items-center justify-center">
        <ConnectWallet className="text-lg" />
      </div>
    </nav>
  )
}

export default MobileNav
