// BUG 1: wrong import path — file is logo.svg, not Logo.svg
// Mac filesystems are case-insensitive so this works locally,
// but Vercel runs on Linux which IS case-sensitive → build fails
import logo from './assets/logo.svg'
import './App.css'

const steps = [
  { label: 'git clone', desc: 'Download the repo to your machine' },
  { label: 'npm install', desc: 'Install project dependencies' },
  { label: 'npm run dev', desc: 'Start the local dev server' },
  { label: 'git push', desc: 'Trigger a Vercel deployment' },
]

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1>Deployment Demo</h1>
        <p className="subtitle">React + Vite + Vercel</p>
      </header>

      <main className="main">
        <div className="grid">
          {steps.map((s, i) => (
            <div className="card" key={i}>
              <span className="step-num">0{i + 1}</span>
              <h2>{s.label}</h2>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>This site was deployed with Vercel ✓</p>
      </footer>
    </div>
  )
}
