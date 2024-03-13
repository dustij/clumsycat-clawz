"use client"

import { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-scroll"

import { cn } from "@/lib/utils"

import ConnectWallet from "./ConnectWallet"

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -90 },
  { name: "How To Buy", target: "how-to-buy", offset: -90 },
  { name: "Tokenomics", target: "tokenomics", offset: -90 },
  { name: "Roadmap", target: "roadmap", offset: -90 },
]

const MobileNav = ({
  containerStyles,
  navState,
}: {
  containerStyles: string
  navState: [boolean, Dispatch<SetStateAction<boolean>>]
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const [openNav, setOpenNav] = navState
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => {
        return (
          <Link
            onClick={() => setOpenNav(false)}
            key={index}
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={cn(isMobile && "active")}
            className="hover:text-primary_light/90 cursor-pointer transition-all"
          >
            {link.name}
          </Link>
        )
      })}
      <div className="flex w-full items-center justify-center">
        <ConnectWallet className="text-lg" />
      </div>
    </nav>
  )
}

export default MobileNav
