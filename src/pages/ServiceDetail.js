import { useParams, Link } from "react-router-dom";
import { SERVICES } from "../data/data";

export default function ServiceDetail() {
  const { id } = useParams();
  const s = SERVICES.find(x => x.id === id);
  if (!s) return <div style={{ padding:"10rem 5%", textAlign:"center" }}><h2>Service not found</h2><Link to="/services">Back to Services</Link></div>;

  return (
    <div style={{ paddingTop:80 }}>
      {/* Hero */}
      <div style={{ background:"#0d0d1a", padding:"5rem 5% 4rem" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <Link to="/services" style={{ color:"#c9a227", fontSize:"0.87rem", textDecoration:"none", display:"inline-block", marginBottom:"1.5rem" }}>← Back to Services</Link>
          <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", marginBottom:"1.5rem" }}>
            <div style={{ width:72, height:72, borderRadius:16, background:s.color+"33",
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2.5rem" }}>{s.icon}</div>
            <div>
              <div style={{ fontSize:"0.78rem", color:"#c9a227", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.4rem" }}>{s.tagline}</div>
              <h1 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:800, color:"#fff", letterSpacing:"-0.03em" }}>{s.title}</h1>
            </div>
          </div>
          <p style={{ color:"#a0a0c0", fontSize:"1.1rem", maxWidth:680, lineHeight:1.75 }}>{s.longDesc}</p>
          <div style={{ display:"flex", gap:"2rem", marginTop:"2rem", flexWrap:"wrap" }}>
            <div style={{ background:"#1a1a2e", borderRadius:12, padding:"1rem 1.5rem" }}>
              <div style={{ fontSize:"0.75rem", color:"#7070a0", marginBottom:"0.3rem" }}>Starting Price</div>
              <div style={{ fontFamily:"'Syne',serif", fontWeight:700, color:"#c9a227", fontSize:"1.2rem" }}>{s.price}</div>
            </div>
            <div style={{ background:"#1a1a2e", borderRadius:12, padding:"1rem 1.5rem" }}>
              <div style={{ fontSize:"0.75rem", color:"#7070a0", marginBottom:"0.3rem" }}>Typical Timeline</div>
              <div style={{ fontFamily:"'Syne',serif", fontWeight:700, color:"#fff", fontSize:"1.2rem" }}>{s.timeline}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding:"5rem 5%", background:"#f8f7f3" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"3rem" }} className="detail-grid">
            <div>
              {/* Features */}
              <h2 style={{ fontFamily:"'Syne',serif", fontSize:"1.8rem", fontWeight:800, marginBottom:"1.5rem" }}>What's Included</h2>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"3rem" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display:"flex", alignItems:"flex-start", gap:"0.75rem", background:"#fff", border:"1px solid #e5e3db", borderRadius:10, padding:"1rem" }}>
                    <span style={{ width:22, height:22, borderRadius:"50%", background:s.color+"22", color:s.color, display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:"0.65rem", fontWeight:700, flexShrink:0 }}>✓</span>
                    <span style={{ fontSize:"0.9rem", color:"#3a3a4a" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Our Process */}
              <h2 style={{ fontFamily:"'Syne',serif", fontSize:"1.8rem", fontWeight:800, marginBottom:"1.5rem" }}>Our Process</h2>
              <div style={{ display:"flex", gap:"1rem", marginBottom:"3rem", flexWrap:"wrap" }}>
                {s.process.map((p, i) => (
                  <div key={p} style={{ display:"flex", alignItems:"center", gap:"0.75rem", background:"#fff", border:"1px solid #e5e3db", borderRadius:10, padding:"0.75rem 1rem", flex:"1 1 200px" }}>
                    <span style={{ width:28, height:28, borderRadius:"50%", background:s.color, color:"#fff", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:"0.8rem", fontWeight:700, flexShrink:0 }}>{i+1}</span>
                    <span style={{ fontSize:"0.9rem", color:"#3a3a4a", fontWeight:500 }}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Portfolio */}
              <h2 style={{ fontFamily:"'Syne',serif", fontSize:"1.8rem", fontWeight:800, marginBottom:"1.5rem" }}>Recent Projects</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
                {s.projects.map(proj => (
                  <div key={proj.name} style={{ background:"#fff", border:"1px solid #e5e3db", borderRadius:14, padding:"1.5rem" }}>
                    <div style={{ fontFamily:"'Syne',serif", fontSize:"1.05rem", fontWeight:700, marginBottom:"0.4rem" }}>{proj.name}</div>
                    <p style={{ fontSize:"0.9rem", color:"#4a4a5a", marginBottom:"1rem", lineHeight:1.6 }}>{proj.desc}</p>
                    <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
                      {proj.tech.map(t => (
                        <span key={t} style={{ background:"#f0f4ff", color:"#1e3a8a", fontSize:"0.73rem", fontWeight:600, padding:"0.25rem 0.65rem", borderRadius:50, border:"1px solid #c7d7ff" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background:"#fff", border:"1px solid #e5e3db", borderRadius:16, padding:"2rem", position:"sticky", top:100 }}>
                <h3 style={{ fontFamily:"'Syne',serif", fontSize:"1.2rem", fontWeight:700, marginBottom:"1rem" }}>Tech Stack</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"2rem" }}>
                  {s.techStack.map(t => (
                    <span key={t} style={{ background:s.color+"12", color:s.color, fontSize:"0.8rem", fontWeight:600, padding:"0.35rem 0.75rem", borderRadius:50, border:`1px solid ${s.color}33` }}>{t}</span>
                  ))}
                </div>
                <div style={{ borderTop:"1px solid #e5e3db", paddingTop:"1.5rem", marginBottom:"1.5rem" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.75rem" }}>
                    <span style={{ fontSize:"0.87rem", color:"#7a7a8a" }}>Starting Price</span>
                    <span style={{ fontSize:"0.87rem", fontWeight:700, color:"#0d0d1a" }}>{s.price}</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <span style={{ fontSize:"0.87rem", color:"#7a7a8a" }}>Timeline</span>
                    <span style={{ fontSize:"0.87rem", fontWeight:700, color:"#0d0d1a" }}>{s.timeline}</span>
                  </div>
                </div>
                <Link to="/contact" style={{ display:"block", background:s.color, color:"#fff",
                  padding:"0.9rem", borderRadius:50, textAlign:"center",
                  fontWeight:700, textDecoration:"none", fontSize:"1rem", marginBottom:"0.75rem" }}>
                  Start This Project
                </Link>
                <Link to="/contact" style={{ display:"block", background:"transparent", color:"#0d0d1a",
                  padding:"0.9rem", borderRadius:50, textAlign:"center",
                  fontWeight:600, textDecoration:"none", fontSize:"0.9rem",
                  border:"2px solid #0d0d1a" }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`.detail-grid{@media(max-width:900px){grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
