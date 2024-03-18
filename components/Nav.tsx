"use client"

import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"

import { cn } from "@/lib/utils"

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -70 },
  { name: "How To Buy", target: "how-to-buy", offset: -70 },
  { name: "Tokenomics", target: "tokenomics", offset: -70 },
  { name: "Roadmap", target: "roadmap", offset: -70 },
  { name: "Whitepaper", target: "https://docs.clumsycatsol.com", offset: -70 },
]

const Nav = ({ containerStyles }: { containerStyles: string }) => {
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
              key={index}
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass="active"
              className="cursor-pointer transition-all hover:text-primary_light/90"
            >
              {link.name}
            </ScrollLink>
          )
        }
      })}
    </nav>
  )
}

export default Nav
