export const staggerParentContainer = {
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

export const staggerItem = {
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

export const buttonItem = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0.5 },
}
