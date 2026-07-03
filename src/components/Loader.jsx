import { motion } from 'framer-motion'

export default function Loader({ done }) {
  return (
    <motion.div
      id="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ pointerEvents: done ? 'none' : 'auto' }}
    >
      <div className="mark">MEHUL BALSARA</div>
      <div className="barTrack">
        <motion.div
          className="bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
