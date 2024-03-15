"use client"

import { easeInOut, motion } from "framer-motion"
import Image from "next/image"

import { subscribeEmail } from "@/lib/actions"
import { staggerItem, staggerParentContainer } from "@/lib/motion"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const About = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Subscribed!")
  }

  return (
    <section
      id="about"
      className="mb-[-5px] mt-[-5px] min-h-[100vh] bg-violet-900 lg:h-[912px]"
    >
      <motion.div
        className="container mx-auto h-full"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={staggerItem}
          className="flex h-full flex-col items-center justify-center md:flex-row"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              type: "srping",
              duration: 1.5,
              repeat: Infinity,
              ease: easeInOut,
            }}
          >
            <Image
              src="/img/about/token.png"
              width={600}
              height={600}
              alt="Token"
              className="hidden md:block"
            />
          </motion.div>
          <div className="flex flex-1 flex-col gap-8 pt-10 sm:ml-20 md:pt-0">
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
            <form
              className="mt-4 flex w-full max-w-sm items-center justify-center space-x-2"
              action={async (formData) => {
                subscribeEmail(formData)
              }}
            >
              <Input
                type="email"
                placeholder="Email"
                className="text-violet-50"
                required
                maxLength={500}
              />
              <Button
                type="submit"
                className="bg-violet-50 text-violet-950 hover:bg-violet-50/90 hover:text-violet-950/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="mb-4 mt-8 md:hidden">
            <Image
              src="/img/about/token.png"
              width={300}
              height={300}
              alt="Token"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
