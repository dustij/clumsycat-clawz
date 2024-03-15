"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import CountUp from "react-countup"

import { staggerItem, staggerParentContainer } from "@/lib/motion"

const Tokenomics = () => {
  const scrollRef = useRef(null)
  const numberRef = useRef(null)
  const numberRefMobile = useRef(null)
  const isInView = useInView(numberRef)
  const isInViewMobile = useInView(numberRefMobile)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.5 0"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["33%", "-33%"])

  return (
    <section className="relative mb-[-10px] mt-[-10px] min-h-[calc(100vh+70px)] items-center ">
      <div className="spacer bg-tokenomicsDivider relative z-10 border-t-[10px] border-t-violet-300" />
      <motion.div
        style={{ y: backgroundY }}
        ref={scrollRef}
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
          className="z-20 -mt-10 flex h-full flex-col items-center justify-center sm:mt-0 md:flex-row"
        >
          <div ref={numberRef} className="relative">
            <div className="absolute inset-0 m-auto md:h-[200px] md:w-[200px] lg:h-[350px] lg:w-[350px]">
              <Image
                src="/img/tokenomics/fluffy-2.png"
                // width={350}
                // height={350}
                fill={true}
                alt="Fluffy"
                className="absolute inset-0 m-auto"
              />
            </div>
            <div className=" absolute hidden h-20 w-20 items-center justify-center text-4xl text-violet-100 md:-right-10 md:bottom-0 md:flex lg:bottom-0 lg:right-0">
              {isInView && (
                <CountUp start={0} end={85} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute hidden h-20 w-20 items-center justify-center text-4xl text-violet-50 md:-right-9 md:flex lg:right-0 lg:top-0">
              {isInView && (
                <CountUp start={0} end={8} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute hidden h-20 w-20 items-center justify-center text-4xl text-violet-50 md:-top-14 md:right-14 md:flex lg:-top-[12%] lg:right-[20%]">
              {isInView && (
                <CountUp start={0} end={5} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute hidden h-20 w-20 items-center justify-center text-4xl text-violet-50 md:-top-[68px] md:right-32 md:flex lg:-top-24 lg:right-[38%]">
              {isInView && (
                <CountUp start={0} end={2} duration={6} suffix="%" />
              )}
            </div>
            <Image
              src="/svg/charts/donut-chart.svg"
              width={600}
              height={600}
              alt="Donut Chart"
              className="z-20 hidden md:block"
            />
          </div>
          <div className="z-20 flex flex-1 flex-col gap-8 sm:ml-20 sm:pt-10 md:pt-0">
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
                <motion.p
                  className="text-md z-20 text-violet-100 sm:text-2xl"
                  variants={staggerItem}
                >
                  <span className="font-bold sm:text-2xl">Liquidty:</span>{" "}
                  Burned
                </motion.p>
              </li>
              <li>
                <motion.p
                  className="text-md z-20 text-violet-100 sm:text-2xl"
                  variants={staggerItem}
                >
                  <span className="font-bold sm:text-2xl">Mint & Freeze:</span>{" "}
                  Revoked
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
          <div ref={numberRefMobile} className="relative mt-24 md:hidden">
            <div className="absolute inset-0 m-auto h-[150px] w-[150px] md:hidden">
              <Image
                src="/img/tokenomics/fluffy-2.png"
                // width={350}
                // height={350}
                fill={true}
                alt="Fluffy"
                className="absolute inset-0 m-auto"
              />
            </div>
            <div className=" absolute -right-10 bottom-0 flex h-20 w-20 items-center justify-center text-2xl text-violet-100 md:hidden lg:bottom-0 lg:right-0">
              {isInViewMobile && (
                <CountUp start={0} end={85} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute -right-9 flex h-20 w-20 items-center justify-center text-2xl text-violet-50 md:hidden lg:right-0 lg:top-0">
              {isInViewMobile && (
                <CountUp start={0} end={8} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute -top-14 right-14 flex h-20 w-20 items-center justify-center text-2xl text-violet-50 md:hidden lg:-top-[12%] lg:right-[20%]">
              {isInViewMobile && (
                <CountUp start={0} end={5} duration={6} suffix="%" />
              )}
            </div>
            <div className="absolute -top-[68px] right-32 flex h-20 w-20 items-center justify-center text-2xl text-violet-50 md:hidden lg:-top-24 lg:right-[38%]">
              {isInViewMobile && (
                <CountUp start={0} end={2} duration={6} suffix="%" />
              )}
            </div>
            <Image
              src="/svg/charts/donut-chart.svg"
              width={300}
              height={300}
              alt="Donut Chart"
              className="z-20 md:hidden"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Tokenomics
