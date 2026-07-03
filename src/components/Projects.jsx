import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'

const PROJECTS = [
  {
    stat: '4-agent ADK pipeline',
    title: 'CatchUp AI',
    description: 'An AI-powered personal briefing tool built on Google ADK + Gemini 2.0 Flash. Four sequential agents collect, classify, mine action items from, and narrate a summary of your missed Slack, email, and doc activity — with PII redaction and role-based masking built in. Ships with a Streamlit dashboard, CLI, and an MCP server.',
    tech: ['Python', 'Google ADK', 'Gemini', 'MCP', 'Streamlit', 'Docker'],
    link: 'https://github.com/Mehul5124/catchup-ai',
    linkLabel: 'View on GitHub',
  },
  {
    stat: 'SARIMAX forecast to 2030',
    title: 'Global Food Price Inflation',
    description: 'A time-series forecasting model projecting global food inflation stabilizing near a 9.7–10% structural baseline through 2030. Separates predictable global structural risk (validated against US/UK data) from unpredictable local volatility, with an interactive Plotly dashboard for exploration.',
    tech: ['Python', 'SARIMAX', 'Plotly', 'Time Series'],
    link: 'https://github.com/Mehul5124/Food-Price-Inflation',
    linkLabel: 'View on GitHub',
  },
  {
    stat: 'FIFA player clustering',
    title: 'FIFA Performance Analytics',
    description: 'Exploratory analysis and K-Means clustering across a full FIFA player dataset — age curves, market value drivers, positional archetypes, and passing/shot profiles — surfaced through a full suite of correlation and distribution visualizations.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    link: 'https://github.com/Mehul5124/SCT_DS_2',
    linkLabel: 'View on GitHub',
  },
  {
    stat: '41K rows · AUC 0.63 → 0.79',
    title: 'Bank Marketing Prediction',
    description: 'A decision tree classifier predicting whether a customer subscribes to a term deposit, trained on the UCI Bank Marketing dataset (41,188 rows). Tuning pushed AUC from 0.63 to 0.79 — a 26% lift — to help target the right customers and cut campaign costs.',
    tech: ['Python', 'Scikit-learn', 'Decision Trees'],
    link: 'https://github.com/Mehul5124/SCT-DS-3',
    linkLabel: 'View on GitHub',
  },
  {
    stat: '7.7M records · 49 states',
    title: 'US Traffic Accidents Analysis',
    description: 'An end-to-end EDA across 7.7 million US traffic accident records (2016–2023): rush-hour and seasonal patterns, weather and visibility effects on severity, infrastructure impact, and geographic hotspots — condensed into 13+ visualizations.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/Mehul5124/SCT--DS-4',
    linkLabel: 'View on GitHub',
  },
  {
    stat: '289K deliveries · 2008–2026',
    title: 'IPL Crunch Analysis',
    description: 'A cricket analytics pipeline mining tactical patterns from ball-by-ball IPL data: debunking the "toss advantage" myth, mapping where winning teams pull ahead phase-by-phase, and ranking the tournament\'s elite batters and bowlers from 2022–2026.',
    tech: ['Python', 'Pandas', 'Data Viz'],
    link: 'https://github.com/Mehul5124/IPL-CRUNCH-ANALYSIS',
    linkLabel: 'View on GitHub',
  },
  {
    stat: 'Kaggle notebook',
    title: 'Autonomous Academic Assistant',
    description: 'An AI agent project exploring autonomous academic assistance — applying agentic design patterns to help automate parts of the academic research and study workflow.',
    tech: ['Python', 'AI Agents', 'Kaggle'],
    link: 'https://www.kaggle.com/code/mehulbalsara/autonomous-academic-assistant',
    linkLabel: 'View on Kaggle',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Selected work</div>
          <h2>Seven problems, seven datasets</h2>
          <p>From a 4-agent AI briefing tool to a 7.7-million-row accident study — each project below is a real, shipped repo.</p>
        </Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
