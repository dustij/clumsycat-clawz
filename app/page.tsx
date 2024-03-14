import About from "@/components/About"
import Hero from "@/components/Hero"
import HowToBuy from "@/components/HowToBuy"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"

export default function Home() {
  return (
    <main>
      <div className="bg-violet-300">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-violet-300 to-violet-900">
        <div className="spacer bg-aboutDivider" />
      </div>
      <div className="bg-violet-900">
        <About />
      </div>
      <div className="bg-gradient-to-b from-violet-900 to-violet-300">
        <div className="spacer bg-howToDivider" />
      </div>
      <div className="bg-violet-300">
        <HowToBuy />
      </div>
      <Tokenomics />
      <Roadmap />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  )
}
