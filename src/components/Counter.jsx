import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Counts up to a numeric target once it scrolls into view. Non-numeric labels (e.g. "3rd yr") render as-is.
export default function Counter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(value.match(/^\d/) ? '0' : value)

  const numeric = parseFloat(value)
  const suffix = value.replace(/^[0-9.]+/, '')
  const isNumeric = !isNaN(numeric) && value.match(/^\d/)

  useEffect(() => {
    if (!inView || !isNumeric) return
    let start = 0
    const duration = 900
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * numeric)
      setDisplay(current + suffix)
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <b>{display}</b>
      <span>{label}</span>
    </motion.div>
  )
}
