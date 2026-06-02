import { useState } from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../data/data";

const TAGS = ["All", "Frontend", "Backend", "Full-Stack", "Mobile", "Database", "Cloud"];

export default function Courses() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? COURSES : COURSES.filter(c => c.tag === active);

  return (
    <div style={{ paddingTop:80 }}>
      <div style={{ background:"#0d0d1a", padding:"5rem 5% 4rem" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>Online Learning</div>
          <h1 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:800, color:"#fff", marginBottom:"1rem", letterSpacing:"-0.03em" }}>All Courses</h1>
          <p style={{ color:"#8080a0", fontSize:"1.1rem", maxWidth:560 }}>Hands-on, project-based courses taught by industry professionals. Subscribe and unlock all instantly.</p>
          <div style={{ display:"flex", gap:"3rem", marginTop:"2rem", flexWrap:"wrap" }}>
            {[["80+","Courses"],["12,000+","Students"],["4.8★","Avg Rating"],["Certificate","On Completion"]].map(([n,l])=>(
              <div key={l}><div style={{ fontFamily:"'Syne',serif", fontSize:"1.6rem", fontWeight:800, color:"#c9a227" }}>{n}</div><div style={{ fontSize:"0.82rem", color:"#7070a0" }}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:"4rem 5%", background:"#f8f7f3" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          {/* Filter Tabs */}
          <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
            {TAGS.map(t => (
              <button key={t} onClick={() => setActive(t)}
                style={{ padding:"0.5rem 1.25rem", borderRadius:50, border:"none",
                  fontSize:"0.87rem", fontWeight:600, cursor:"pointer", transition:"all 0.2s",
                  background: active===t?"#0d0d1a":"#fff",
                  color: active===t?"#fff":"#3a3a4a",
                  boxShadow: active===t?"none":"0 1px 4px rgba(0,0,0,.06)",
                  border: active===t?"none":"1px solid #e5e3db" }}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:"1.5rem" }}>
            {filtered.map(c => (
              <Link to={`/courses/${c.id}`} key={c.id}
                style={{ background:"#fff", border:"1px solid #e5e3db", borderRadius:14,
                  overflow:"hidden", textDecoration:"none", display:"block",
                  transition:"transform 0.25s,box-shadow 0.25s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.1)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{ height:130, background:c.bg, display:"flex", alignItems:"center",
                  justifyContent:"center", fontSize:"2.8rem", position:"relative" }}>
                  {c.icon}
                  {c.badge && (
                    <span style={{ position:"absolute", top:10, right:10, fontSize:"0.68rem",
                      fontWeight:700, padding:"0.25rem 0.65rem", borderRadius:50,
                      background: c.badge==="HOT"?"#fff1f3":c.badge==="NEW"?"#e8fff5":"#eeeeff",
                      color: c.badge==="HOT"?"#e0003c":c.badge==="NEW"?"#00a875":"#2020cc" }}>
                      {c.badge}
                    </span>
                  )}
                </div>
                <div style={{ padding:"1.25rem" }}>
                  <div style={{ fontSize:"0.7rem", fontWeight:700, color:"#1e3a8a", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"0.4rem" }}>{c.tag}</div>
                  <div style={{ fontFamily:"'Syne',serif", fontSize:"0.95rem", fontWeight:700, color:"#0d0d1a", lineHeight:1.35, marginBottom:"0.5rem" }}>{c.name}</div>
                  <div style={{ fontSize:"0.82rem", color:"#7a7a8a", marginBottom:"0.75rem" }}>by {c.instructor} · {c.level}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #e5e3db", paddingTop:"0.75rem" }}>
                    <span style={{ fontSize:"0.8rem", color:"#7a7a8a" }}><span style={{ color:"#f5a623" }}>★</span> {c.rating} ({c.reviews})</span>
                    <span style={{ fontSize:"0.8rem", color:"#7a7a8a" }}>📚 {c.hours} · {c.lessons} lessons</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
