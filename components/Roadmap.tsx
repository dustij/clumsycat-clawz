"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

import { staggerItem, staggerParentContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"
import Lenis from "@studio-freight/lenis"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export const roadmapCards = [
  {
    title: "Phase One",
    subtitle: "Foundation and Hype",
    objective:
      "Establish a strong online presence and begin building community anticipation.",
    bullets: [
      "Website Development",
      "Teaser Campaigns",
      "Token Launch Announcement",
    ],
    src: "/img/roadmap/phase1.png",
  },
  {
    title: "Phase Two",
    subtitle: "Launch and Momentum",
    objective:
      "Successfully launch the meme coin while maintaining the hype and beginning to build a robust community.",
    bullets: [
      "Token Launch",
      "Post-Launch Marketing Blitz",
      "Community Building Initiatives",
    ],
    src: "/img/roadmap/phase2.png",
  },
  {
    title: "Phase Three",
    subtitle: "Visibility and Market Positioning",
    objective:
      "Increase the coin's visibility in the crypto community and establish a market presence.",
    bullets: [
      "Listings on CoinGecko and CoinMarketCap",
      "Strategic Marketing Initiatives",
      "Preparation for Phase 4 Developments",
    ],
    src: "/img/roadmap/phase3.png",
  },
  {
    title: "Phase Four",
    subtitle: "Utility Development and Ecosystem Expansion",
    objective:
      "Develop and launch platforms to provide utility to the meme coin, thereby driving long-term growth and sustainability.",
    bullets: [
      "Launch of ClumsyNFTz Marketplace",
      "Introduction of ClawZwap Exchange",
      "Plushy Giveaway and Airdrop Campaigns",
      "Listing on Centralized Exchanges (CEX)",
    ],
    src: "/img/roadmap/phase4.png",
  },
]

const Roadmap = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    // start of container, start of window; end of container, end of window
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  // Save for later if I ever want to view scrollYProgress
  // useEffect(() => {
  //   scrollYProgress.on("change", (v) => {
  //     console.log(v)
  //   })
  // }, [scrollYProgress])

  // the range of scrollYProgress where we want to animate the card
  const range0 = [0, 1]
  const range1 = [0.25, 1]
  const range2 = [0.5, 1]
  const range3 = [0.75, 1]

  // every card has different target scale because of the order of the cards (first card will scale more than the last card)
  const scale0 = 1 - (4 - 0) * 0.05
  const scale1 = 1 - (4 - 1) * 0.05
  const scale2 = 1 - (4 - 2) * 0.05
  const scale3 = 1 - (4 - 3) * 0.05

  // transform for each card
  const scale0Transform = useTransform(scrollYProgress, range0, [1, scale0])
  const scale1Transform = useTransform(scrollYProgress, range1, [1, scale1])
  const scale2Transform = useTransform(scrollYProgress, range2, [1, scale2])
  const scale3Transform = useTransform(scrollYProgress, range3, [1, scale3])

  return (
    <section className="relative z-10 h-full bg-background_light">
      {/* <div className="spacer bg-roadmapDivider relative z-30 " /> */}
      <motion.div
        id="roadmap"
        ref={container}
        className="container z-20 flex min-h-[100vh] flex-col"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          className="sticky top-[90px] h-auto py-[20px] text-center text-4xl text-violet-900 sm:text-5xl"
          variants={staggerItem}
        >
          Roadmap
        </motion.h1>
        {roadmapCards.map((card, i) => (
          <div
            // card container
            key={i}
            className="sticky top-[140px] z-20 mt-[80px] flex items-center justify-center sm:top-[calc(3rem+40px)] sm:-mt-[calc(3rem+40px)] md:h-screen"
          >
            <motion.div
              // card
              className={cn(
                "relative min-h-[100vh] origin-top md:h-[500px] md:min-h-[500px] md:w-[1000px]",
                i == 0 && "-top-[50px] md:-top-[50px]",
                i == 1 && "-top-[40px] md:-top-[20px]",
                i == 2 && "-top-[30px] md:top-[10px]",
                i == 3 && "-top-[20px] md:top-[40px]",
              )}
              style={{
                scale:
                  i == 0
                    ? scale0Transform
                    : i == 1
                      ? scale1Transform
                      : i == 2
                        ? scale2Transform
                        : scale3Transform,
              }}
            >
              <Card className="border-violet-300 bg-white text-violet-900 ">
                <CardContent className="h-full">
                  <div className="flex h-full w-full flex-col justify-between md:flex-row">
                    <div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{card.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {card.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardDescription className="px-6 text-base">
                        {card.objective}
                      </CardDescription>
                      <div className="px-6 pt-6">
                        <ul className="list-disc pl-6">
                          {card.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="m-auto md:mx-0 md:min-w-[494px]">
                      <Image
                        src={card.src}
                        alt={card.title}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-0 left-0 z-10 h-[500px] w-full bg-background_light" />
    </section>
  )
}

export default Roadmap
