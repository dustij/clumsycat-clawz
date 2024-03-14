"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import { Button } from "./ui/button"

const container = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.075,
      duration: 0.75,
      type: "spring",
      bounce: 0.5,
    },
  },
}

const buttonItem = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0.5 },
}

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      whileInView="show"
      viewport={{ once: true }}
      className="h-full w-full bg-gradient-to-b from-transparent via-violet-100 to-violet-300"
    >
      <section
        id="home"
        className="mt-[30px] min-h-[calc(100vh-70px)] bg-none bg-center bg-no-repeat sm:mt-[70px] md:bg-hero md:bg-md lg:h-[912px] lg:bg-lg"
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col justify-between pt-12 sm:flex-row sm:pt-48">
            <div className="h-ful flex flex-col">
              <div className="mb-8">
                <motion.h1 className="h1 text-violet-900" variants={item}>
                  CLUMSY
                  <span className="h1 hidden text-violet-500 sm:inline-block">
                    CAT
                  </span>
                </motion.h1>
                <motion.h1
                  className="h1 text-violet-500 sm:hidden"
                  variants={item}
                >
                  CAT
                </motion.h1>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-8 md:w-[50%] lg:pl-2">
                <motion.p
                  className=" md:h5 lg:h4 text-lg text-violet-900"
                  variants={item}
                >
                  Embrace the whimsy of innovation with ClumsyCat Token—where
                  Fluffy&apos;s fumbles fuel your fortune
                </motion.p>
                {/* Buttons */}
                <motion.div className="flex gap-4" variants={item}>
                  <motion.div variants={buttonItem}>
                    <Link href="#" rel="noopener noreferrer" target="_blank">
                      <Button
                        variant="violet"
                        size="lg_rounded"
                        className="text-lg"
                        aria-label="Buy"
                      >
                        Buy $CLAWZ
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div variants={buttonItem}>
                    <Link
                      href="https://twitter.com/ClumsyCat_Sol"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant="violet_outline"
                        size="icon"
                        aria-label="X"
                        className="rounded-full"
                      >
                        <FaXTwitter size={20} />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div variants={buttonItem}>
                    <Link
                      href="https://t.me/clumsycat_sol"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant="violet_outline"
                        size="icon"
                        aria-label="Telegram"
                        className="rounded-full"
                      >
                        <FaTelegramPlane size={20} />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <Image
              className="mt-8 md:hidden"
              src="/img/hero/fluffy-transparent.png"
              width={600}
              height={600}
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero
