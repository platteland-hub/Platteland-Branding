import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Phone, Mail, Instagram, MapPin, PenTool, Shirt, Truck, FileText, Layers3, Factory, Sparkles } from 'lucide-react'
import './styles.css'

const services = [
  { icon: PenTool, title: 'Logo Design', text: 'Professional logos built for farms, contractors, mining businesses and rural service companies.' },
  { icon: Shirt, title: 'Workwear Branding', text: 'Branded clothing concepts for teams, staff uniforms, caps, jackets and premium workwear.' },
  { icon: Truck, title: 'Vehicle & Bakkie Decals', text: 'Clean, bold decals for bakkies, trailers, trucks and fleet vehicles that act as moving billboards.' },
  { icon: Factory, title: 'Equipment Decals', text: 'Branding for balers, tractors, implements, mining vehicles and agricultural equipment.' },
  { icon: FileText, title: 'Business Stationery', text: 'Letterheads, business cards, quote templates, invoice layouts and document branding.' },
  { icon: Layers3, title: 'Full Brand Packages', text: 'One consistent business identity across logos, workwear, vehicles, documents and social media.' }
]

const packages = [
  { title: 'Starter Identity', tag: 'For new businesses', items: ['Logo concept', 'Colour direction', 'Basic social media logo', 'Business card layout'] },
  { title: 'Professional Brand Kit', tag: 'Most popular', items: ['Logo system', 'Business card', 'Letterhead', 'Workwear mockup', 'Bakkie decal concept'] },
  { title: 'Full Brand Build', tag: 'Premium package', items: ['Complete visual identity', 'Vehicle & equipment decal direction', 'Stationery set', 'Social media launch look', 'Brand consistency guide'] }
]

const portfolio = ['Farm Logos', 'Bakkie Decals', 'Workwear', 'Equipment Branding', 'Business Cards', 'Letterheads']

function LogoMark() {
  return (
    <div className="logo-mark">
      <div className="pb-text"><span>P</span><span>B</span></div>
      <svg className="river-line" viewBox="0 0 260 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M5 22 C48 2 88 7 123 18 C151 27 184 29 255 8" stroke="#A46A3D" strokeWidth="8" strokeLinecap="round" />
        <path d="M8 23 C62 18 97 17 134 22 C168 27 202 24 252 15" stroke="#73804A" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      </svg>
      <div className="brand-name">Platteland</div>
      <div className="brand-subtitle">Branding</div>
    </div>
  )
}

function Button({ children, href, secondary = false }) {
  return <a className={`button ${secondary ? 'secondary' : ''}`} href={href}>{children}</a>
}

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a className="mini-logo" href="#top" aria-label="Platteland Branding home">
            <div className="mini-circle"><span>P</span><span>B</span></div>
            <div><p>Platteland</p><small>Branding</small></div>
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="quote-link" href="tel:0826301106">Get a Quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="eyebrow"><Sparkles size={16} /> Premium branding from the Northern Cape</div>
              <h1>Branding for businesses that build the platteland.</h1>
              <p className="lead">Platteland Branding creates logos, workwear branding, vehicle decals, equipment decals, business cards and letterheads for agricultural, mining and service businesses that want to look professional, trusted and recognisable.</p>
              <div className="hero-buttons">
                <Button href="#contact">Start Your Branding Project <ArrowRight size={16} /></Button>
                <Button href="#services" secondary>View Services</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="logo-card">
              <LogoMark />
              <div className="quick-tags"><span>Logos</span><span>Workwear</span><span>Decals</span></div>
            </motion.div>
          </div>
        </section>

        <section className="proof-bar">
          <div className="container proof-grid">
            {['Built for agriculture, mining and service industries', 'Premium identity with practical real-world use', 'Consistent branding from logo to bakkie decal'].map((item) => <div className="proof" key={item}><BadgeCheck size={20} />{item}</div>)}
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading"><p>Services</p><h2>A complete brand solution.</h2><span>From the first logo concept to the final decal on a bakkie, your business gets one strong and consistent look.</span></div>
            <div className="cards-grid">
              {services.map((service) => {
                const Icon = service.icon
                return <article className="card" key={service.title}><div className="icon-box"><Icon size={26} /></div><h3>{service.title}</h3><p>{service.text}</p></article>
              })}
            </div>
          </div>
        </section>

        <section id="packages" className="section light-section">
          <div className="container">
            <div className="section-heading dark"><p>Brand packages</p><h2>Clear packages. Premium results.</h2><span>Clients can start small or build a complete business identity from the ground up.</span></div>
            <div className="package-grid">
              {packages.map((pack) => <article className="package" key={pack.title}><strong>{pack.tag}</strong><h3>{pack.title}</h3><ul>{pack.items.map((item) => <li key={item}><BadgeCheck size={18} />{item}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-heading"><p>Portfolio</p><h2>Work that looks good in the real world.</h2><span>Your portfolio can be built around mockups first, then replaced with real client projects as the business grows.</span></div>
            <div className="portfolio-grid">{portfolio.map((item, i) => <article className="portfolio-card" key={item}><span>0{i + 1}</span><h3>{item}</h3></article>)}</div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container process-card">
            <div><p className="section-kicker">Our process</p><h2>Simple for the client. Detailed behind the scenes.</h2></div>
            <div className="process-grid">
              {[
                ['01', 'Submit your business details and branding brief.'],
                ['02', 'We design strong concepts based on your industry and story.'],
                ['03', 'You give feedback and we refine the direction.'],
                ['04', 'Final files and mockups are delivered for real-world use.']
              ].map(([num, text]) => <div className="step" key={num}><strong>{num}</strong><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div><p className="section-kicker">Start your project</p><h2>Ready to brand your business?</h2><p className="lead">Send through your business details, industry, branding needs and any ideas you already have. We will help shape it into a professional identity.</p>
              <div className="contact-list">
                <a href="tel:0826301106"><Phone size={20} />082 630 1106</a>
                <a href="mailto:plattelandbranding@gmail.com"><Mail size={20} />plattelandbranding@gmail.com</a>
                <a href="https://instagram.com/platteland_branding" target="_blank" rel="noreferrer"><Instagram size={20} />@platteland_branding</a>
                <span><MapPin size={20} />Northern Cape, South Africa</span>
              </div>
            </div>
            <aside className="brief-card"><h3>Client brief checklist</h3><p>Ask every client for these details before starting.</p>{['Business name and contact details', 'VAT number and registration number, if needed', 'Email, phone number, location and social media', 'Business background and industry', 'Preferred colours, symbols and branding style', 'Where the branding will be used'].map((item) => <div className="brief-item" key={item}><BadgeCheck size={19} />{item}</div>)}<a className="button full" href="mailto:plattelandbranding@gmail.com?subject=Branding%20Project%20Request">Email Platteland Branding</a></aside>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><p>© 2026 Platteland Branding. Premium branding for rural and industrial businesses.</p><p>Logos | Workwear | Decals | Brand Solutions</p></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
