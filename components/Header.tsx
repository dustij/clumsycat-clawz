import Image from "next/image"
import Link from "next/link"

import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="bg-background_light fixed left-0 right-0 h-[70px] w-full">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image src="/img/logo/logo.png" alt="Logo" width={55} height={55} />
            <h1 className="text-[1.5rem] font-extrabold tracking-tight text-violet-900 lg:text-[1.75rem]">
              CLUMSY<span className="text-violet-500">CAT</span>
            </h1>
          </div>
        </Link>
        <MobileNav containerStyles="xl:hidden" />
        <Nav containerStyles="bg-background flex gap-4 hidden xl:flex" />
      </div>
    </header>
  )
}

export default Header
