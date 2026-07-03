import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ stat, title, description, tech, link, linkLabel }) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${px * 3}deg) rotateX(${-py * 3}deg)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <motion.div
      ref={ref}
      className="proj-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.25s ease-out, background 0.35s ease' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="proj-stat">{stat}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="proj-tech">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <a className="proj-link" href={link} target="_blank" rel="noopener noreferrer">
        {linkLabel}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </motion.div>
  )
}
