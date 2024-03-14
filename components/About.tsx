"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { staggerItem, staggerParentContainer } from "@/lib/motion"

const About = () => {
  return (
    <section id="about" className="min-h-[100vh] bg-violet-900 lg:h-[912px]">
      <motion.div
        className="container mx-auto h-full"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={staggerItem}
          className="flex h-full flex-col items-center justify-center sm:flex-row"
        >
          <Image
            src="/img/about/token.png"
            width={700}
            height={700}
            alt="Token"
            className="hidden sm:block"
          />
          <div className="flex grow flex-col gap-8 pt-10 sm:ml-20 sm:pt-0">
            <motion.h2
              className="text-4xl text-violet-100 sm:text-5xl"
              variants={staggerItem}
            >
              About ClumsyCat
            </motion.h2>
            <motion.p
              className="text-md text-violet-200 sm:text-lg"
              variants={staggerItem}
            >
              Meet Fluffy, the developer with a twist—Fluffy is a cat, and not
              just any cat, but a notoriously clumsy one at that. Picture this:
              a feline genius, tapping away at the keyboard, yet perpetually at
              war with gravity. Yes, Fluffy&rsquo;s desk is a battleground,
              where many a project detail inadvertently takes a leap, much like
              those infamous cat-induced tumbles from the tabletop.
            </motion.p>
            <motion.p
              className="text-md text-violet-200 sm:text-lg"
              variants={staggerItem}
            >
              Enter the world of ClumsyCat Token. Holders of this quirky coin
              will discover that Fluffy&rsquo;s &quot;accidental&quot;
              droppings—those bits of projects that slip off the desk—magically
              appear in their wallets. That&rsquo;s the charm of the ClumsyCat
              Token: as Fluffy embarks on new ventures, token holders are gifted
              with exclusive early access airdrops, a token of appreciation for
              embarking on this clumsy journey.
            </motion.p>
            <motion.p
              className="text-md text-violet-200 sm:text-lg"
              variants={staggerItem}
            >
              Eager to see what rewards the future holds? Dive into our roadmap
              below and uncover the treasures that await in your wallet. And
              because no one likes missing out, especially on surprises from our
              feline developer, subscribe to receive email updates. Stay in the
              loop with the latest developments and upcoming airdrops, ensuring
              you&rsquo;re always front and center for the action. Don&rsquo;t
              miss a beat in the whimsical world of Fluffy and the ClumsyCat
              Token.
            </motion.p>
          </div>
          <div className="sm:hidden">
            <Image
              src="/img/about/token.png"
              width={700}
              height={700}
              alt="Token"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
