"use client"

import { Link } from "react-scroll"

import { cn } from "@/lib/utils"

const links = [
  { name: "home", target: "home", offset: -200 },
  { name: "about", target: "about", offset: -200 },
  { name: "how to buy", target: "how-to-buy", offset: -200 },
  { name: "tokenomics", target: "tokenomics", offset: -200 },
  { name: "roadmap", target: "roadmap", offset: -200 },
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
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
