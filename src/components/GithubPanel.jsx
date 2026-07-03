import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'

export default function GithubPanel() {
  return (
    <section id="github">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Version control</div>
          <h2>On GitHub</h2>
        </Reveal>
        <Reveal delay={0.1} className="gh-panel">
          <div>
            <div className="gh-user">github.com/<b>Mehul5124</b></div>
            <p style={{ marginTop: 14, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.7 }}>
              Public repos spanning forecasting, classification, EDA, and multi-agent AI systems — actively
              shipping as coursework and internship prep continue.
            </p>
            <MagneticButton
              href="https://github.com/Mehul5124"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ marginTop: 24, display: 'inline-flex' }}
            >
              View full profile
            </MagneticButton>
          </div>
          <div className="gh-stats">
            <div><b>7</b><span>Public repos</span></div>
            <div><b>2026</b><span>Actively building</span></div>
            <div><b>Py</b><span>Primary language</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
