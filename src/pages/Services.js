import { Link } from "react-router-dom";
import { SERVICES } from "../data/data";

export default function Services() {
  return (
    <div style={{ paddingTop:80 }}>
      <div style={{ background:"#0d0d1a", padding:"5rem 5% 4rem" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
            textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>What We Build</div>
          <h1 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2.5rem,5vw,4rem)",
            fontWeight:800, color:"#fff", marginBottom:"1rem", letterSpacing:"-0.03em" }}>Software Services</h1>
          <p style={{ color:"#8080a0", fontSize:"1.1rem", maxWidth:560 }}>
            From MVPs to enterprise platforms, we deliver scalable, production-ready software solutions.
          </p>
        </div>
      </div>
      <div style={{ padding:"5rem 5%", background:"#f8f7f3" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"2rem" }}>
            {SERVICES.map(s => (
              <Link to={`/services/${s.id}`} key={s.id}
                style={{ background:"#fff", border:"1px solid #e5e3db", borderRadius:16,
                  padding:"2rem", textDecoration:"none", display:"block",
                  transition:"transform 0.25s,box-shadow 0.25s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.08)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{ width:56, height:56, borderRadius:12, background:s.color+"18",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"1.8rem", marginBottom:"1.5rem" }}>{s.icon}</div>
                <div style={{ fontFamily:"'Syne',serif", fontSize:"1.2rem", fontWeight:700,
                  color:"#0d0d1a", marginBottom:"0.3rem" }}>{s.title}</div>
                <div style={{ fontSize:"0.82rem", color:s.color, fontWeight:600,
                  marginBottom:"0.8rem" }}>{s.tagline}</div>
                <p style={{ fontSize:"0.9rem", color:"#4a4a5a", lineHeight:1.7, marginBottom:"1.5rem" }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"1.5rem" }}>
                  {s.techStack.slice(0,4).map(t => (
                    <span key={t} style={{ background:"#f0f4ff", color:"#1e3a8a",
                      fontSize:"0.73rem", fontWeight:600, padding:"0.25rem 0.6rem",
                      borderRadius:50, border:"1px solid #c7d7ff" }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
                  borderTop:"1px solid #e5e3db", paddingTop:"1rem" }}>
                  <div>
                    <div style={{ fontSize:"0.82rem", color:"#7a7a8a" }}>Starting from</div>
                    <div style={{ fontFamily:"'Syne',serif", fontWeight:700, color:"#0d0d1a" }}>{s.price}</div>
                  </div>
                  <span style={{ color:s.color, fontWeight:700, fontSize:"0.9rem" }}>View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <section style={{ background:"#0d0d1a", padding:"4rem 5%", textAlign:"center" }}>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"2rem", fontWeight:800, color:"#fff", marginBottom:"1rem" }}>Need a custom solution?</h2>
        <p style={{ color:"#8080a8", marginBottom:"2rem" }}>Tell us about your project and we'll get back to you within 24 hours.</p>
        <Link to="/contact" style={{ background:"#c9a227", color:"#0d0d1a",
          padding:"0.9rem 2.5rem", borderRadius:50, fontWeight:700,
          textDecoration:"none", fontSize:"1rem", display:"inline-block" }}>Get a Free Quote</Link>
      </section>
    </div>
  );
}
