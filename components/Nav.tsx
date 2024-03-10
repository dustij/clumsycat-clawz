"use client"

import { Link } from "react-scroll"

import { cn } from "@/lib/utils"

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -90 },
  { name: "how to buy", target: "how-to-buy", offset: -90 },
  { name: "tokenomics", target: "tokenomics", offset: -90 },
  { name: "roadmap", target: "roadmap", offset: -90 },
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
            className="hover:text-primary_light/90 cursor-pointer transition-all duration-300"
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
