export const staggerParentContainer = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 2,
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
      delayChildren: 0.3,
      staggerChildren: 0.075,
      duration: 2,
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
