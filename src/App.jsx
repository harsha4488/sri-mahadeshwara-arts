import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

const gallery = [
  { src: "photo-01.jpg", label: "Workshop", title: "Where the making happens", className: "wide" },
  { src: "photo-02.jpg", label: "Exterior", title: "Sri Mahadeshwara Arts", className: "tall" },
  { src: "photo-03.jpg", label: "Machines", title: "Precision CNC routing", className: "tall" },
  { src: "photo-04.jpg", label: "Printing", title: "Wide-format digital printing", className: "wide" },
  { src: "photo-05.jpg", label: "Lettering", title: "Custom dimensional signs", className: "tall" },
  { src: "photo-06.jpg", label: "Laser & Print", title: "Production in progress", className: "wide" },
  { src: "photo-07.jpg", label: "Car Styling", title: "Custom vehicle graphics", className: "wide" },
  { src: "photo-08.jpg", label: "Signs", title: "Bold outdoor branding", className: "tall" },
  { src: "photo-09.jpg", label: "Vehicle Decals", title: "Made to stand out", className: "tall" },
  { src: "photo-10.jpg", label: "Portfolio", title: "From idea to installation", className: "wide" },
];

const services = [
  { icon: "⚡", title: "Bike & Car Stickers", text: "Custom graphics, decals, names, numbers and full vehicle styling." },
  { icon: "🖨️", title: "Digital Printing", text: "Sharp, vibrant prints for boards, banners, displays and branding." },
  { icon: "✂️", title: "Laser Cutting", text: "Clean-cut acrylic, MDF and decorative pieces for custom work." },
  { icon: "🧩", title: "CNC Routing", text: "Precision routed signboards, letters and dimensional elements." },
  { icon: "🔤", title: "Letter Bending", text: "Custom 3D letters for shops, offices and outdoor signs." },
  { icon: "🎨", title: "Custom Artwork", text: "Bring your idea, reference or design and we’ll turn it into print." },
];

function App() {
  const [slide, setSlide] = useState(0);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const sliderItems = gallery.slice(0, 5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((value) => (value + 1) % sliderItems.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const filtered = useMemo(
    () => filter === "All" ? gallery : gallery.filter((x) => x.label === filter),
    [filter]
  );

  const next = () => setSlide((slide + 1) % sliderItems.length);
  const prev = () => setSlide((slide - 1 + sliderItems.length) % sliderItems.length);

  return (
    <div className="site">
      <div className="topline">
        <span>Custom stickers • Digital printing • Signage</span>
        <span>Vijayanagar • Bengaluru</span>
      </div>

      <header className="nav">
        <a href="#home" className="brand">
          <img src={asset("logo.jpg")} alt="Sri Mahadeshwara Arts logo" />
          <div>
            <strong>SRI MAHadeshwara ARTS</strong>
            <small>MAKE. PRINT. STICK. STAND OUT.</small>
          </div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#workshop">Workshop</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="cta small" href="#contact">Get a Quote →</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-slides">
            {sliderItems.map((item, index) => (
              <img
                key={item.src}
                src={asset(item.src)}
                alt={item.title}
                className={index === slide ? "hero-slide active" : "hero-slide"}
              />
            ))}
          </div>
          <div className="hero-overlay" />
          <div className="hero-gridline" />
          <div className="hero-copy">
            <span className="eyebrow">SRI MAHADESHWARA ARTS</span>
            <h1>Make it bold.<br /><em>Make it yours.</em></h1>
            <p>Bike decals, car graphics, custom stickers, digital prints and signage — crafted in our own workshop.</p>
            <div className="hero-buttons">
              <a className="cta" href="#portfolio">See Our Work <span>↗</span></a>
              <a className="ghost" href="#services">What We Do</a>
            </div>
            <div className="hero-badges">
              <span>01 <b>STICKERS</b></span>
              <span>02 <b>PRINT</b></span>
              <span>03 <b>SIGNAGE</b></span>
            </div>
          </div>

          <button className="slider-arrow left" onClick={prev}>←</button>
          <button className="slider-arrow right" onClick={next}>→</button>

          <div className="slider-controls">
            <div className="slider-dots">
              {sliderItems.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => setSlide(index)}
                  className={index === slide ? "dot active" : "dot"}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
            <span>{String(slide + 1).padStart(2, "0")} / {String(sliderItems.length).padStart(2, "0")}</span>
          </div>
        </section>

        <section className="intro-band">
          <div>
            <span className="eyebrow dark">BUILT FOR THE STREET</span>
            <h2>Your idea deserves<br />a louder finish.</h2>
          </div>
          <p>From a small bike sticker to a full car wrap concept, we turn graphics into eye-catching real-world work.</p>
          <a href="#contact" className="underline-link">Start a project →</a>
        </section>

        <section id="services" className="section services">
          <div className="section-head">
            <div>
              <span className="eyebrow dark">WHAT WE DO</span>
              <h2>Print it. Cut it.<br />Stick it. Build it.</h2>
            </div>
            <p>One workshop for creative production, precision finishing and custom branding.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Get a quote →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section portfolio">
          <div className="section-head">
            <div>
              <span className="eyebrow dark">REAL WORK</span>
              <h2>Made here.<br /><em>Installed out there.</em></h2>
            </div>
            <div className="filters">
              <button className={filter === "All" ? "filter active" : "filter"} onClick={() => setFilter("All")}>All</button>
              {[...new Set(gallery.map((x) => x.label))].slice(0, 5).map((label) => (
                <button key={label} className={filter === label ? "filter active" : "filter"} onClick={() => setFilter(label)}>{label}</button>
              ))}
            </div>
          </div>

          <div className="masonry">
            {filtered.map((item) => (
              <button
                className={`work-card ${item.className}`}
                key={item.src}
                onClick={() => setLightbox(item)}
              >
                <img src={asset(item.src)} alt={item.title} loading="lazy" />
                <div className="work-caption">
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <i>View ↗</i>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="workshop" className="workshop">
          <div className="workshop-photo">
            <img src={asset("photo-03.jpg")} alt="Sri Mahadeshwara Arts CNC router" loading="lazy" />
            <div className="machine-tag">PRECISION / 01</div>
          </div>
          <div className="workshop-copy">
            <span className="eyebrow">INSIDE THE WORKSHOP</span>
            <h2>Ideas go in.<br /><em>Big graphics come out.</em></h2>
            <p>We work hands-on — designing, printing, cutting, routing and installing. That means better control over the finish and faster movement from concept to installation.</p>
            <div className="stats">
              <div><strong>01</strong><span>Design</span></div>
              <div><strong>02</strong><span>Produce</span></div>
              <div><strong>03</strong><span>Install</span></div>
            </div>
            <a href="#contact" className="cta">Talk about your project →</a>
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-title">
            <span className="eyebrow dark">VEHICLE STYLING</span>
            <h2>Make your ride<br /><em>impossible to ignore.</em></h2>
            <p>Bold side graphics, clean decals, names, numbers and custom artwork for bikes and cars.</p>
            <a href="#contact" className="underline-link">Book a sticker job →</a>
          </div>
          <div className="showcase-images">
            <img src={asset("photo-07.jpg")} alt="Custom sticker installation on a car" loading="lazy" />
            <img src={asset("photo-10.jpg")} alt="Custom vehicle graphics at Sri Mahadeshwara Arts" loading="lazy" />
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <span className="eyebrow">LET'S MAKE SOMETHING LOUD</span>
            <h2>Have a bike?<br />Have a car?<br /><em>Have an idea?</em></h2>
            <p>Bring your reference image, rough sketch or just your idea. We’ll help you turn it into a sticker, print or sign.</p>
          </div>
          <div className="contact-card">
            <div>
              <span>01</span><strong>Share your requirement</strong><small>Sticker / Print / Signage</small>
            </div>
            <div>
              <span>02</span><strong>Choose your finish</strong><small>Size / Material / Style</small>
            </div>
            <div>
              <span>03</span><strong>Get your quote</strong><small>Fast, clear and practical</small>
            </div>
            <a className="cta full" href="#home">Start with your idea →</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={asset("logo.jpg")} alt="Sri Mahadeshwara Arts" />
          <div><strong>SRI MAHADESHWARA ARTS</strong><small>STICKERS · PRINTING · SIGNAGE</small></div>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a>
        </div>
        <small>© 2026 Sri Mahadeshwara Arts</small>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="close" onClick={() => setLightbox(null)}>×</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={asset(lightbox.src)} alt={lightbox.title} />
            <div>
              <span>{lightbox.label}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
