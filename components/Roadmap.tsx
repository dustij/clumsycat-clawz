"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { staggerItem, staggerParentContainer } from "@/lib/motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      "Introduction of Clawzwap Exchange",
      "Plushy Giveaway and Airdrop Campaigns",
      "Listing on Centralized Exchanges (CEX)",
    ],
    src: "/img/roadmap/phase4.png",
  },
]

const Roadmap = () => {
  return (
    <section className="relative z-10 h-full bg-gradient-to-b from-background_light to-violet-100">
      {/* <div className="spacer bg-roadmapDivider relative z-30 " /> */}
      <motion.div
        id="roadmap"
        className="container z-20 flex min-h-[calc(100vh)] flex-col py-[20px]"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-8 text-center text-4xl text-violet-900 sm:text-5xl"
          variants={staggerItem}
        >
          Roadmap
        </motion.h1>
        {roadmapCards.map((card, i) => (
          <div
            key={i}
            className="flex min-h-[100vh] items-center justify-center border-2 md:h-[100vh]"
          >
            <Card className="min-h-[100vh] border-violet-300 bg-white text-violet-900 md:h-[500px] md:min-h-[500px] md:w-[1000px]">
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
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Roadmap
