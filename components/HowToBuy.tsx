"use client"

import { easeInOut, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"

import { config } from "@/config"
import { staggerItem, staggerParentContainer } from "@/lib/motion"
import { copyToClipboard } from "@/lib/utils"

import { Button } from "./ui/button"

const HowToBuy = () => {
  return (
    <section
      id="how-to-buy"
      className="mb-[-10px] mt-[-10px] flex min-h-[100vh] items-center bg-violet-300 py-[20px]"
    >
      <motion.div
        className="container mx-auto h-full"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="gap-10 pt-10 sm:ml-20 md:pt-0">
          <motion.h2
            className="text-4xl text-violet-800 sm:text-5xl"
            variants={staggerItem}
          >
            How To Buy
          </motion.h2>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col gap-8"
          >
            {/* STEP 1 */}
            <motion.div
              className="flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
              variants={staggerItem}
            >
              <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 p-1 text-xl text-violet-500">
                <p>1</p>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-xl text-violet-800">
                  Download Phantom Extension
                </h3>
                <p className="text-lg text-violet-800">
                  Download and install Phantom from the app store for mobile
                  use, or install the browser extension for desktop browsers.
                </p>
                <Link
                  href="https://phantom.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="violet"
                    size="lg_rounded"
                    className="text-lg"
                    aria-label="Buy"
                  >
                    Go To Phantom
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* STEP 2 */}
            <div className="flex w-full">
              <motion.div
                variants={staggerItem}
                className="m-auto hidden px-8 lg:block"
              >
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 5, y: 5, x: 0 }}
                  animate={{ rotate: [0, 5, 0], y: [5, 0, 5], x: [15, 0, 15] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 0.25,
                  }}
                >
                  <Image
                    src="/svg/arrows/arrow-right.svg"
                    width={200}
                    height={200}
                    alt="Arrow"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
                variants={staggerItem}
              >
                <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 p-1 text-xl text-violet-500">
                  <p>2</p>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-xl text-violet-800">Fund Your Wallet</h3>
                  <p className="text-lg text-violet-800">
                    To acquire $CLAWZ, ensure you have SOL in your Phantom
                    wallet. If you don&apos;t have SOL, you have various
                    options: purchase it directly within Phantom, transfer from
                    another wallet, or buy it on a different exchange and then
                    send it to your Phantom wallet.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* STEP 3 */}
            <div className="flex w-full">
              <motion.div
                className="flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
                variants={staggerItem}
              >
                <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 p-1 text-xl text-violet-500">
                  <p>3</p>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-xl text-violet-800">Visit Raydium</h3>
                  <p className="text-lg text-violet-800">
                    Access Raydium through your preferred browser by visiting{" "}
                    <span className="font-medium underline">
                      <Link
                        href="https://raydium.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        raydium.io
                      </Link>
                    </span>
                    , or use the built-in browser within your Phantom wallet
                    app. Connect your Phantom wallet, then enter the $CLAWZ
                    token address in Raydium&apos;s search bar, selecting
                    &quot;ClumsyCat&quot; as your option.
                  </p>
                  <div
                    className="flex items-center justify-between rounded-lg border border-violet-700 text-violet-700 hover:cursor-pointer hover:text-violet-700/80"
                    onClick={() =>
                      copyToClipboard(config.ca)
                        .then(() => {
                          toast.success("Address copied to clipboard")
                        })
                        .catch(() => {
                          toast.error("Failed to copy address")
                        })
                    }
                  >
                    <span className="px-4 py-2 ">{config.ca}</span>
                    <span className="px-4 py-2">
                      <svg
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        focusable="false"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="m-auto hidden px-8 lg:block"
              >
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 5, y: 5, x: 0 }}
                  animate={{ rotate: [0, 5, 0], y: [5, 0, 5], x: [15, 0, 15] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 0.5,
                  }}
                >
                  <Image
                    src="/svg/arrows/arrow-left.svg"
                    width={200}
                    height={200}
                    alt="Arrow"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* STEP 4 */}
            <div className="flex w-full">
              <motion.div
                variants={staggerItem}
                className="m-auto hidden px-8 text-xl lg:block"
              >
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 5, y: 5, x: 0 }}
                  animate={{ rotate: [0, 5, 0], y: [5, 0, 5], x: [15, 0, 15] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 0.75,
                  }}
                >
                  <Image
                    src="/svg/arrows/arrow-right.svg"
                    width={200}
                    height={200}
                    alt="Arrow"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="ml-auto flex max-w-[767px] gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
                variants={staggerItem}
              >
                <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 p-1 text-violet-500">
                  <p>4</p>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-xl text-violet-800">Get Some $CLAWZ</h3>
                  <p className="text-lg text-violet-800">
                    Trade SOL for $CLAWZ hassle-free. Enjoy tax-free
                    transactions, eliminating concerns about specific slippage.
                    However, during periods of market volatility, adjusting
                    slippage might be necessary for seamless trading.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HowToBuy
