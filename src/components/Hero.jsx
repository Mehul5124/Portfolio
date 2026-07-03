import { motion } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas.jsx'
import MagneticButton from './MagneticButton.jsx'
import Counter from './Counter.jsx'

const lineVariants = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: 0.9 + i * 0.12, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="hero">
      <NeuralCanvas />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Open to internships</div>

            <h1>
              <span className="line" style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span style={{ display: 'inline-block' }} variants={lineVariants} custom={0} initial="hidden" animate="show">
                  From raw data.
                </motion.span>
              </span>
              <span className="line" style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span style={{ display: 'inline-block' }} variants={lineVariants} custom={1} initial="hidden" animate="show">
                  <em>to real answers.</em>
                </motion.span>
              </span>
            </h1>

            <motion.div className="hero-name" variants={fadeUp} custom={0} initial="hidden" animate="show">
              Mehul Pradipkumar Balsara
            </motion.div>
            <motion.div className="hero-role" variants={fadeUp} custom={1} initial="hidden" animate="show">
              Machine Learning Engineer <span className="dot">•</span> Data Scientist <span className="dot">•</span> AI Agent Builder
            </motion.div>

            <motion.div className="hero-cta" variants={fadeUp} custom={2} initial="hidden" animate="show">
              <MagneticButton href="#projects" className="btn btn-primary">Explore my work</MagneticButton>
              <MagneticButton href="#contact" className="btn btn-ghost">Contact me</MagneticButton>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} custom={3} initial="hidden" animate="show">
              <Counter value="7" label="Shipped projects" />
              <Counter value="7.7M+" label="Rows analyzed" />
              <Counter value="3rd yr" label="CSE @ Laxmi Institute of Technology"/>
            </motion.div>
          </div>
          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
          >
            <motion.img
              src="/avatar.png"
              alt="Mehul Balsara"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
