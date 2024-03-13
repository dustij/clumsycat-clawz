"use client"

import { Link } from "react-scroll"

import { cn } from "@/lib/utils"

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -90 },
  { name: "How To Buy", target: "how-to-buy", offset: -90 },
  { name: "Tokenomics", target: "tokenomics", offset: -90 },
  { name: "Roadmap", target: "roadmap", offset: -90 },
]

const Nav = ({ containerStyles }: { containerStyles: string }) => {
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
            activeClass="active"
            className="cursor-pointer text-lg transition-all hover:text-primary_light/90"
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
