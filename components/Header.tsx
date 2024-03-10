import Image from "next/image"
import Link from "next/link"

import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="bg-background fixed left-0 right-0 h-[90px] w-full">
      <div className="container mx-auto">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image src="/img/logo/logo.png" alt="Logo" width={50} height={50} />
            <h2 className="hidden text-[1.75rem] font-extrabold leading-[30px] text-violet-900 lg:block">
              CLUMSY<span className="text-violet-500">CAT</span>
            </h2>
          </div>
        </Link>
        <MobileNav containerStyles="xl:hidden" />
        <Nav containerStyles="bg-background flex gap-4 hidden xl:flex" />
      </div>
    </header>
  )
}

export default Header
