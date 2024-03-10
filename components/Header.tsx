import Nav from "./Nav"

const Header = () => {
  return (
    <header className="bg-background fixed left-0 right-0 w-full">
      <div className="container mx-auto">
        <Nav containerStyles="bg-red-300 py-12 flex gap-4" />
      </div>
    </header>
  )
}

export default Header
