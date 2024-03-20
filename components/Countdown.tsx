"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("03/21/2024 10:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(difference / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (number: number) => String(number).padStart(2, "0")

  return (
    <footer className="fixed bottom-0 z-50 w-full bg-white py-6 text-center">
      <div className="container">
        <h1 className="text-4xl font-extrabold tracking-tighter">
          Official Launch Starts in
          <span className="font-mono ml-2">
            {formatNumber(hours)}:{formatNumber(minutes)}:
            {formatNumber(seconds)}
          </span>
        </h1>
      </div>
    </footer>
  )
}
