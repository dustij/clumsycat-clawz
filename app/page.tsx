import About from "@/components/About"
import Hero from "@/components/Hero"
import HowToBuy from "@/components/HowToBuy"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gradient-to-b from-violet-300 to-violet-900">
        <div className="spacer bg-aboutDivider" />
      </div>
      <About />
      <div className="bg-gradient-to-b from-violet-900 to-violet-300">
        <div className="spacer bg-howToDivider" />
      </div>
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  )
}
