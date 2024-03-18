"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import { config } from "@/config"
import { buttonItem, staggerItem, staggerParentContainer } from "@/lib/motion"

import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="bg-gradient-to-b mb-[-5px] h-full w-full from-transparent via-violet-100 to-violet-300">
      <motion.section
        id="home"
        className="bg-none md:bg-md lg:bg-lg mt-[30px] min-h-[calc(100vh-70px)] bg-center bg-no-repeat sm:mt-[70px] md:bg-hero lg:h-[912px]"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col justify-between pt-12 md:flex-row md:pt-48">
            <div className="flex h-full flex-col">
              <div className="mb-8">
                <motion.h1
                  className="h1 text-violet-900"
                  variants={staggerItem}
                >
                  CLUMSY
                  <span className="h1 hidden text-violet-500 sm:inline-block">
                    CAT
                  </span>
                </motion.h1>
                <motion.h1
                  className="h1 text-violet-500 sm:hidden"
                  variants={staggerItem}
                >
                  CAT
                </motion.h1>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-8 md:w-[50%] lg:pl-2">
                <motion.p
                  className=" md:h5 lg:h4 text-lg text-violet-900"
                  variants={staggerItem}
                >
                  Embrace the whimsy of innovation with ClumsyCat Token—where
                  Fluffy&apos;s fumbles fuel your fortune
                </motion.p>
                {/* Buttons */}
                <motion.div className="flex gap-4" variants={staggerItem}>
                  <motion.div variants={buttonItem}>
                    <Link
                      href={config.raydium}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
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
                      href={config.x}
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
                      href={config.telegram}
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
      </motion.section>
    </div>
  )
}

export default Hero
