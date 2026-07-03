import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    date: 'Data Science Deep-Dive',
    title: 'US Traffic Accidents Analysis',
    body: 'Completed an internship-style deep dive into a 7.7M-row national accident dataset — full cleaning, feature engineering, and insight pipeline from raw CSV to executive-ready report.',
  },
  {
    date: '2023 — Present',
    title: 'B.Tech, Computer Science Engineering',
    body: '3rd-year CSE student focused on machine learning, data science, and agentic AI systems — building applied projects alongside coursework rather than waiting for a classroom to assign them.',
  },
  {
    date: 'Now seeking',
    title: 'AI Engineer / Data Scientist / ML Engineer Internships',
    body: "Looking for an internship where I can take a real dataset or a real agent workflow from ambiguous problem to shipped solution — and learn fast doing it.",
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Trajectory</div>
          <h2>Currently learning by building</h2>
        </Reveal>
        <div className="timeline">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="tl-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="tl-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
