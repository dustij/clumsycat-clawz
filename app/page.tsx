import About from "@/components/About"
import Hero from "@/components/Hero"
import HowToBuy from "@/components/HowToBuy"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="spacer bg-aboutDivider" />
      <About />
      <div className="spacer bg-howToDivider" />
      <HowToBuy />
      {/* <div className="spacer bg-howToDivider" /> */}
      <Tokenomics />
      <Roadmap />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  )
}
