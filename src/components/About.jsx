import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">Philosophy</div>
            <p className="about-lead">
              I turn messy, real-world data into systems that make decisions — and I build agents that act on them.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="about-body">
            <p>
              I'm a <strong>3rd-year Computer Science student</strong> building data solutions and AI agents — the
              kind that go past a notebook and into something people can actually use. My work sits at the
              intersection of statistical modeling, machine learning, and applied AI agent design.
            </p>
            <p>
              I like starting from a raw dataset — millions of rows, missing values, no clean story yet — and
              working forward: cleaning it, modeling it, and shipping something that answers a real question.
              Recently that's meant forecasting global food inflation with SARIMAX, predicting customer behavior
              with decision trees, and building a multi-agent pipeline that turns a flooded inbox into a
              30-second brief.
            </p>
            <p>
              I'm currently sharpening my edge in <strong>prompt engineering and agentic systems</strong> —
              designing AI agents that reason, call tools, and hand off work between each other — while keeping
              my modeling fundamentals (Python, Pandas, NumPy, scikit-learn) sharp underneath it all.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
