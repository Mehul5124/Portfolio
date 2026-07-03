import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'

const EMAIL = 'balsaramehul5124@gmail.com'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-inner">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Let's talk</div>
          <h2>Have a role in mind?</h2>
          <p>
            I'm actively looking for AI Engineer, Data Scientist, and ML Engineer internships. If you've got a
            hard data problem or an agent you want built, I'd like to hear about it.
          </p>
          <div className="contact-cta">
            <MagneticButton href={`mailto:${EMAIL}`} className="btn btn-primary">Email me</MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/mehulbalsara/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </MagneticButton>
          </div>
          <div className="contact-links">
            <a href="https://github.com/Mehul5124" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/mehulbalsara/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={`mailto:${EMAIL}`}>Email ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
