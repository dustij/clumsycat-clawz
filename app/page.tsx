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
      <div className="spacer bg-howToDivider border-t-[15px] border-t-violet-900" />
      <HowToBuy />
      <Tokenomics />
      <div className="spacer bg-roadmapDivider relative z-30 border-t-[2px] border-t-violet-950" />
      <Roadmap />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  )
}
