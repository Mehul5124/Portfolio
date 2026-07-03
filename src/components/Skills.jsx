import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const SKILLS = [
  { name: 'Python', tag: 'Core language', level: 90 },
  { name: 'Pandas', tag: 'Data wrangling', level: 85 },
  { name: 'NumPy', tag: 'Numerical computing', level: 82 },
  { name: 'Matplotlib / Seaborn', tag: 'Visualization', level: 78 },
  { name: 'Scikit-learn', tag: 'Applied ML', level: 65 },
  { name: 'Prompt Engineering', tag: 'Agentic AI', level: 70 },
  { name: 'Streamlit', tag: 'Rapid prototyping', level: 60 },
  { name: 'Git / GitHub', tag: 'Version control', level: 72 },
]

function SkillCell({ name, tag, level }) {
  return (
    <motion.div
      className="skill-cell"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sk-name">{name}</div>
      <div className="sk-tag">{tag}</div>
      <div className="sk-bar">
        <motion.div
          className="sk-fill"
          initial={{ width: '0%' }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Toolkit</div>
          <h2>What I build with</h2>
          <p>Core data science tooling, backed by a growing focus on agentic AI systems and prompt engineering.</p>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <SkillCell key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
