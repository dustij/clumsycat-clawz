"use client"

import { motion } from "framer-motion"

import { staggerParentContainer } from "@/lib/motion"

const Roadmap = () => {
  return (
    <section className="relative z-10 h-full bg-gradient-to-b from-background_light to-violet-100">
      {/* <div className="spacer bg-roadmapDivider relative z-30 " /> */}
      <motion.div
        id="roadmap"
        className="container z-20 min-h-[calc(100vh)] py-[20px]"
        variants={staggerParentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="text-center text-5xl text-violet-900">Roadmap</h1>
      </motion.div>
    </section>
  )
}

export default Roadmap
