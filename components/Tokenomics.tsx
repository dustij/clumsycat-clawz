"use client"

import { easeInOut, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

import { staggerItem, staggerParentContainer } from "@/lib/motion"

const Tokenomics = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 0"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["33%", "-33%"])

  return (
    <section className="relative mb-[-10px] mt-[-10px] min-h-[calc(100vh+70px)] items-center">
      <div className="spacer bg-tokenomicsDivider relative z-10" />
      <motion.div
        style={{ y: backgroundY }}
        ref={ref}
        className="bg-fluffy absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat sm:bg-contain"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-violet-950/90 via-violet-950/90 to-violet-950" />
      <motion.div
        id="tokenomics"
        className="container z-20 m-auto flex h-full min-h-[calc(100vh+70px)] items-center justify-center"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={staggerItem}
          className="z-20 flex h-full flex-col items-center justify-center md:flex-row"
        >
          <Image
            src="/svg/charts/donut-chart.svg"
            width={600}
            height={600}
            alt="Donut Chart"
            className="z-20 hidden md:block"
          />
          <div className="z-20 flex flex-1 flex-col gap-8 pt-10 sm:ml-20 md:pt-0">
            <motion.h2
              className="z-20 text-4xl text-violet-50 sm:text-5xl"
              variants={staggerItem}
            >
              Tokenomics
            </motion.h2>
            <ul className="flex flex-col gap-4">
              <li>
                <motion.p
                  className="text-md z-20 text-violet-100 sm:text-2xl"
                  variants={staggerItem}
                >
                  <span className="font-bold sm:text-2xl">Total Supply:</span>{" "}
                  1,000,000,000
                </motion.p>
              </li>
              <li>
                <motion.p
                  className="text-md z-20 text-violet-100 sm:text-2xl"
                  variants={staggerItem}
                >
                  <span className="font-bold sm:text-2xl">Taxes:</span> 0%
                </motion.p>
              </li>
              <li>
                <motion.div
                  className="text-md z-20 text-violet-100 sm:text-2xl"
                  variants={staggerItem}
                >
                  <span className="font-bold sm:text-2xl">
                    Distribution:
                    <ul className="pl-5 font-normal sm:text-2xl">
                      <li className="flex">Liquidity Pool: 85%</li>
                      <li>Marketing: 8%</li>
                      <li>Development: 5%</li>
                      <li>Airdrop: 2%</li>
                    </ul>
                  </span>
                </motion.div>
              </li>
            </ul>
          </div>
          <Image
            src="/svg/charts/donut-chart.svg"
            width={300}
            height={300}
            alt="Donut Chart"
            className="z-20 mt-16 md:hidden"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Tokenomics
