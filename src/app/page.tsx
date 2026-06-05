import Link from 'next/link'

const activities = [
  { emoji: '⛺', label: 'Kamp' },
  { emoji: '🔥', label: 'Mangal' },
  { emoji: '🎣', label: 'Balık Tutma' },
  { emoji: '🛶', label: 'Kayak' },
  { emoji: '🥾', label: 'Yürüyüş' },
  { emoji: '🏔️', label: 'Trekking' },
  { emoji: '🧗', label: 'Kaya Tırmanışı' },
  { emoji: '🏊', label: 'Yüzme' },
  { emoji: '🏄', label: 'SUP Board' },
  { emoji: '🤿', label: 'Dalgıçlık' },
  { emoji: '🚴', label: 'Bisiklet' },
  { emoji: '🌿', label: 'Doğa' },
]

const features = [
  {
    icon: '📍',
    title: 'Konum İşaretle',
    desc: 'Kamp alanlarını, balık tutma noktalarını ve gizli güzellikleri haritaya ekle. Toplulukla paylaş.',
  },
  {
    icon: '🏷️',
    title: 'Akıllı Etiketler',
    desc: '#ateşyakılabilir #sumevcut #elektrik gibi etiketlerle konumları detaylı belgele.',
  },
  {
    icon: '📸',
    title: 'Anları Paylaş',
    desc: 'Fotoğraflarını yükle, deneyimlerini yaz. Doğa severlerin keşfetmesine ilham ol.',
  },
  {
    icon: '🔍',
    title: 'Keşfet',
    desc: 'Aktiviteye, konuma veya etikete göre filtrele. Sana en uygun yeri bul.',
  },
]

export default function LandingPage() {
  return (
    <main className="landing-page">

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="logo">supsuu</span>
          <div className="nav-links">
            <Link href="/login" className="nav-login">Giriş Yap</Link>
            <Link href="/register" className="nav-cta">Ücretsiz Başla</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="grid-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span>🌲</span>
            <span>Türkiye'nin doğa topluluğu</span>
          </div>

          <h1 className="hero-title">
            Doğayla bağını<br />
            <em>toplulukla paylaş</em>
          </h1>

          <p className="hero-desc">
            Kamp yerleri, balık tutma noktaları, yürüyüş rotaları ve daha fazlası.
            Konumları işaretle, etiketle, keşfet.
          </p>

          <div className="hero-actions">
            <Link href="/register" className="btn-hero-primary">
              Hemen Katıl
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/explore" className="btn-hero-secondary">
              Keşfet
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">2.400+</span>
              <span className="stat-label">Konum</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8.900+</span>
              <span className="stat-label">Paylaşım</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3.100+</span>
              <span className="stat-label">Üye</span>
            </div>
          </div>
        </div>

        {/* Floating activity cards */}
        <div className="hero-cards">
          <div className="float-card card-1">
            <span className="card-emoji">⛺</span>
            <div>
              <p className="card-title">Sarıkamış Kamp Alanı</p>
              <p className="card-meta">📍 Kars · #ateşyakılabilir #sumevcut</p>
            </div>
          </div>
          <div className="float-card card-2">
            <span className="card-emoji">🎣</span>
            <div>
              <p className="card-title">Abant Gölü — Alabalık</p>
              <p className="card-meta">📍 Bolu · #tekne #lisansserbest</p>
            </div>
          </div>
          <div className="float-card card-3">
            <span className="card-emoji">🧗</span>
            <div>
              <p className="card-title">Geyikbayırı Rotaları</p>
              <p className="card-meta">📍 Antalya · #ankrajlı #beginner</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AKTİVİTELER ── */}
      <section className="activities-section">
        <p className="section-eyebrow">Neler paylaşılıyor?</p>
        <h2 className="section-title">Her aktivite,<br />bir topluluk</h2>
        <div className="activities-grid">
          {activities.map((a) => (
            <div key={a.label} className="activity-chip">
              <span className="activity-emoji">{a.emoji}</span>
              <span className="activity-label">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÖZELLİKLER ── */}
      <section className="features-section">
        <p className="section-eyebrow">Nasıl çalışır?</p>
        <h2 className="section-title">Her şey bir<br />konum ile başlar</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ETİKET SHOWCASE ── */}
      <section className="tags-section">
        <div className="tags-inner">
          <div className="tags-text">
            <p className="section-eyebrow">Akıllı etiketler</p>
            <h2 className="section-title">Konumları<br />detaylı belgele</h2>
            <p className="tags-desc">
              Bir kamp alanını işaretlediğinde #ateşyakılabilir, #sumevcut, #elektrik,
              #otopark gibi onlarca etiket ekleyebilirsin. Böylece herkes doğru beklentiyle gider.
            </p>
            <Link href="/register" className="btn-hero-primary" style={{display:'inline-flex', marginTop:'2rem'}}>
              Etiketlemeye Başla →
            </Link>
          </div>
          <div className="tags-demo">
            <div className="demo-card">
              <div className="demo-header">
                <span className="demo-emoji">⛺</span>
                <div>
                  <p className="demo-name">Uludağ Kamp Vadisi</p>
                  <p className="demo-loc">📍 Bursa, Türkiye</p>
                </div>
              </div>
              <div className="demo-tags">
                {['#ateşyakılabilir','#sumevcut','#elektrik','#otopark','#tuvalet','#duş','#ücretsiz','#aileuyin','#köpekdostu','#rezervasyon'].map(t => (
                  <span key={t} className="demo-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="orb orb-cta-1" />
          <div className="orb orb-cta-2" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Doğa maceralarını<br />paylaşmaya hazır mısın?</h2>
          <p className="cta-desc">Ücretsiz hesap aç, topluluğa katıl.</p>
          <div className="cta-actions">
            <Link href="/register" className="btn-hero-primary">Google ile Başla</Link>
            <Link href="/register" className="btn-hero-secondary">E-posta ile Kayıt</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="logo" style={{fontSize:'1.25rem'}}>supsuu</span>
        <p className="footer-copy">© 2025 Supsuu · Doğa severler için</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .landing-page {
          font-family: 'DM Sans', sans-serif;
          background: #0a0f0a;
          color: #e8f0e8;
          overflow-x: hidden;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          backdrop-filter: blur(16px);
          background: rgba(10,15,10,0.7);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 1rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .logo {
          font-family: 'Fraunces', serif;
          font-size: 1.5rem; font-weight: 600;
          color: #7dd87d;
          letter-spacing: -0.02em;
        }
        .nav-links { display: flex; gap: 1rem; align-items: center; }
        .nav-login {
          color: #a8c8a8; text-decoration: none; font-size: 0.9rem;
          padding: 0.5rem 1rem; border-radius: 8px;
          transition: color 0.2s;
        }
        .nav-login:hover { color: #7dd87d; }
        .nav-cta {
          background: #2d6a2d; color: #c8f0c8;
          text-decoration: none; font-size: 0.9rem; font-weight: 500;
          padding: 0.5rem 1.25rem; border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #3a8a3a; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          max-width: 1200px; margin: 0 auto;
        }
        .hero-bg {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
        }
        .orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.25;
        }
        .orb-1 { width: 600px; height: 600px; background: #1a4d1a; top: -100px; left: -150px; }
        .orb-2 { width: 400px; height: 400px; background: #0d3d2d; top: 40%; right: -100px; }
        .orb-3 { width: 300px; height: 300px; background: #2d4a0d; bottom: 10%; left: 30%; }
        .grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(125,216,125,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125,216,125,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-content {
          position: relative; z-index: 1;
          max-width: 580px;
          animation: fadeUp 0.8s ease both;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(125,216,125,0.1);
          border: 1px solid rgba(125,216,125,0.2);
          color: #7dd87d; font-size: 0.8rem; font-weight: 500;
          padding: 0.4rem 1rem; border-radius: 100px;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 300; line-height: 1.1;
          color: #e8f5e8;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }
        .hero-title em {
          font-style: italic; color: #7dd87d;
          font-weight: 400;
        }
        .hero-desc {
          font-size: 1.1rem; line-height: 1.7;
          color: #7a9a7a; margin-bottom: 2rem;
          max-width: 460px;
        }
        .hero-actions {
          display: flex; gap: 1rem; flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .btn-hero-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #27a05b; color: #fff;
          text-decoration: none; font-weight: 500;
          padding: 0.85rem 1.75rem; border-radius: 12px;
          transition: all 0.2s; font-size: 0.95rem;
        }
        .btn-hero-primary:hover { background: #1e8049; transform: translateY(-1px); }
        .btn-arrow { font-size: 1.1rem; transition: transform 0.2s; }
        .btn-hero-primary:hover .btn-arrow { transform: translateX(3px); }
        .btn-hero-secondary {
          display: inline-flex; align-items: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #c0d8c0; text-decoration: none; font-weight: 500;
          padding: 0.85rem 1.75rem; border-radius: 12px;
          transition: all 0.2s; font-size: 0.95rem;
        }
        .btn-hero-secondary:hover { background: rgba(255,255,255,0.1); }

        .hero-stats {
          display: flex; gap: 2rem; align-items: center;
        }
        .stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: 1.5rem; font-weight: 600; color: #7dd87d;
        }
        .stat-label { font-size: 0.75rem; color: #5a7a5a; text-transform: uppercase; letter-spacing: 0.05em; }
        .stat-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }

        /* Floating cards */
        .hero-cards {
          position: absolute; right: 0; top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 1rem;
          z-index: 1;
        }
        .float-card {
          display: flex; align-items: center; gap: 0.75rem;
          background: rgba(20,30,20,0.85);
          border: 1px solid rgba(125,216,125,0.12);
          backdrop-filter: blur(12px);
          padding: 0.75rem 1rem; border-radius: 14px;
          min-width: 260px;
          animation: floatIn 0.8s ease both;
        }
        .card-1 { animation-delay: 0.2s; }
        .card-2 { animation-delay: 0.4s; transform: translateX(20px); }
        .card-3 { animation-delay: 0.6s; }
        .card-emoji { font-size: 1.5rem; }
        .card-title { font-size: 0.85rem; font-weight: 500; color: #d0ead0; margin-bottom: 0.2rem; }
        .card-meta { font-size: 0.72rem; color: #5a7a5a; }

        /* SECTIONS */
        .activities-section,
        .features-section,
        .tags-section,
        .cta-section {
          padding: 6rem 2rem;
          max-width: 1200px; margin: 0 auto;
          position: relative;
        }
        .section-eyebrow {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: #7dd87d;
          margin-bottom: 0.75rem;
        }
        .section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; line-height: 1.15;
          color: #e8f5e8; letter-spacing: -0.02em;
          margin-bottom: 3rem;
        }

        /* Activities */
        .activities-grid {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
        }
        .activity-chip {
          display: flex; align-items: center; gap: 0.5rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.6rem 1.1rem; border-radius: 100px;
          transition: all 0.2s; cursor: default;
        }
        .activity-chip:hover {
          background: rgba(125,216,125,0.08);
          border-color: rgba(125,216,125,0.2);
        }
        .activity-emoji { font-size: 1.1rem; }
        .activity-label { font-size: 0.875rem; color: #a0c0a0; }

        /* Features */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 2rem;
          transition: all 0.3s;
        }
        .feature-card:hover {
          background: rgba(125,216,125,0.05);
          border-color: rgba(125,216,125,0.15);
          transform: translateY(-3px);
        }
        .feature-icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
        .feature-title {
          font-family: 'Fraunces', serif;
          font-size: 1.2rem; font-weight: 400; color: #d0ead0;
          margin-bottom: 0.5rem;
        }
        .feature-desc { font-size: 0.875rem; line-height: 1.6; color: #5a7a5a; }

        /* Tags section */
        .tags-section { max-width: 1200px; }
        .tags-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
        }
        .tags-desc { font-size: 1rem; line-height: 1.7; color: #5a7a5a; }
        .demo-card {
          background: rgba(20,30,20,0.8);
          border: 1px solid rgba(125,216,125,0.15);
          border-radius: 20px; padding: 1.5rem;
        }
        .demo-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; }
        .demo-emoji { font-size: 2rem; }
        .demo-name { font-weight: 500; color: #d0ead0; margin-bottom: 0.2rem; }
        .demo-loc { font-size: 0.8rem; color: #5a7a5a; }
        .demo-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .demo-tag {
          font-size: 0.75rem; font-weight: 500;
          background: rgba(125,216,125,0.1);
          border: 1px solid rgba(125,216,125,0.2);
          color: #7dd87d;
          padding: 0.3rem 0.7rem; border-radius: 100px;
        }

        /* CTA */
        .cta-section {
          max-width: 100%; padding: 8rem 2rem;
          text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(to bottom, transparent, rgba(10,20,10,0.5));
        }
        .cta-bg { position: absolute; inset: 0; pointer-events: none; }
        .orb-cta-1 { width: 500px; height: 500px; background: #1a4d1a; top: -100px; left: 50%; transform: translateX(-60%); opacity: 0.2; filter: blur(100px); position: absolute; border-radius: 50%; }
        .orb-cta-2 { width: 300px; height: 300px; background: #0d3d2d; bottom: -50px; right: 10%; opacity: 0.15; filter: blur(80px); position: absolute; border-radius: 50%; }
        .cta-content { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .cta-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300; line-height: 1.15;
          color: #e8f5e8; margin-bottom: 1rem;
        }
        .cta-desc { color: #5a7a5a; margin-bottom: 2rem; font-size: 1rem; }
        .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2rem;
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1200px; margin: 0 auto;
        }
        .footer-copy { font-size: 0.8rem; color: #3a5a3a; }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero { flex-direction: column; padding-top: 7rem; }
          .hero-cards { position: static; transform: none; width: 100%; margin-top: 2rem; }
          .float-card { min-width: unset; }
          .card-2 { transform: none; }
          .tags-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hero-stats { gap: 1.25rem; }
          .nav-login { display: none; }
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
