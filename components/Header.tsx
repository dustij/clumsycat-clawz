"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

import ConnectWallet from "./ConnectWallet"
import MobileNav from "./MobileNav"
import Nav from "./Nav"

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
  },
}

const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
    width: 0,
  },
}

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
  },
}

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50)
    }

    // add scroll event
    window.addEventListener("scroll", handleScroll)
    // clear scroll event
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-[70px] w-full bg-background_light",
        headerActive && "shadow-md",
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image src="/img/logo/logo.png" alt="Logo" width={55} height={55} />
            <h1 className="text-[1.5rem] font-extrabold text-violet-900 lg:text-[1.75rem]">
              CLUMSY<span className="text-violet-500">CAT</span>
            </h1>
          </div>
        </Link>
        <MobileNav
          navState={[openNav, setOpenNav]}
          containerStyles={cn(
            "xl:hidden transition-all flex-col text-center gap-8 flex fixed bg-background_light w-full left-0 top-[70px] text-lg font-medium text-violet-950",
            openNav
              ? "max-h-[calc(100vh-70px)] overflow-auto pt-8 pb-10 border-t shadow-md border-surface_variant_light"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-surface_variant_light/0",
          )}
        />
        <Nav containerStyles="bg-background font-medium text-lg flex gap-4 hidden xl:flex text-violet-950" />
        {/* hide/show menu button */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 xl:flex">
            <ConnectWallet className="text-lg" />
          </div>
          <button
            className="flex h-8 w-10 flex-col items-center justify-between xl:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <motion.div
              variants={topVariants}
              animate={openNav ? "opened" : "closed"}
              className="h-1 w-10 origin-left rounded-full bg-primary_light"
            />
            <motion.div
              variants={centerVariants}
              animate={openNav ? "opened" : "closed"}
              className="h-1 w-10 origin-center rounded-full bg-primary_light"
            />
            <motion.div
              variants={bottomVariants}
              animate={openNav ? "opened" : "closed"}
              className="h-1 w-10 origin-left rounded-full bg-primary_light"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
