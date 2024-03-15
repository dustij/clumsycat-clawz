"use client"

import { easeInOut, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { staggerItem, staggerParentContainer } from "@/lib/motion"

import { Button } from "./ui/button"

const HowToBuy = () => {
  return (
    <section
      id="how-to-buy"
      className="mb-[-10px] mt-[-10px] flex min-h-[(100vh)] items-center bg-violet-300 py-[20px]"
    >
      <motion.div
        className="container mx-auto h-full"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="gap-8 pt-10 sm:ml-20 md:pt-0">
          <motion.h2
            className="pt-10 text-4xl text-violet-800 sm:text-5xl"
            variants={staggerItem}
          >
            How To Buy
          </motion.h2>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col gap-4"
          >
            {/* STEP 1 */}
            <motion.div
              className="flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
              variants={staggerItem}
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl text-violet-800">
                  Download Phantom Extension
                </h3>
                <p className="text-lg text-violet-800">
                  Download and install Phantom on the app store, or install the
                  browser extension if you are using a desktop browser.
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
            <div className="hidden w-full lg:flex">
              <motion.div variants={staggerItem} className="m-auto px-8">
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 8, y: 5, x: 0 }}
                  animate={{ rotate: [0, 8, 0], y: [5, 0, 5], x: [10, 0, 10] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
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
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl text-violet-800">
                    Download Phantom Extension
                  </h3>
                  <p className="text-lg text-violet-800">
                    Download and install Phantom on the app store, or install
                    the browser extension if you are using a desktop browser.
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
            </div>

            {/* STEP 3 */}
            <div className="hidden w-full lg:flex">
              <motion.div
                className="flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
                variants={staggerItem}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl text-violet-800">
                    Download Phantom Extension
                  </h3>
                  <p className="text-lg text-violet-800">
                    Download and install Phantom on the app store, or install
                    the browser extension if you are using a desktop browser.
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
              <motion.div variants={staggerItem} className="m-auto px-8">
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 8, y: 5, x: 0 }}
                  animate={{ rotate: [0, 8, 0], y: [5, 0, 5], x: [10, 0, 10] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
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
            <div className="hidden w-full lg:flex">
              <motion.div variants={staggerItem} className="m-auto px-8">
                <motion.div
                  className="m-auto px-8"
                  initial={{ rotate: 8, y: 5, x: 0 }}
                  animate={{ rotate: [0, 8, 0], y: [5, 0, 5], x: [10, 0, 10] }}
                  transition={{
                    type: "srping",
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
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
                className="ml-auto flex max-w-[767px] items-center gap-4 rounded-xl bg-violet-100 p-6 shadow-lg"
                variants={staggerItem}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl text-violet-800">
                    Download Phantom Extension
                  </h3>
                  <p className="text-lg text-violet-800">
                    Download and install Phantom on the app store, or install
                    the browser extension if you are using a desktop browser.
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
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HowToBuy
