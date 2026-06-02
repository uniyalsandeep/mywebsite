import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SERVICES, COURSES, PLANS, TESTIMONIALS, TECHS } from "../data/data";

function useFade() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Section({ children, bg, id, style={} }) {
  const [ref, vis] = useFade();
  return (
    <section id={id} ref={ref} style={{ padding:"6rem 5%", background: bg||"#f8f7f3",
      opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(30px)",
      transition:"opacity 0.7s ease,transform 0.7s ease", ...style }}>
      <div style={{ maxWidth:1400, margin:"0 auto" }}>{children}</div>
    </section>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const tickerItems = [...TECHS, ...TECHS];

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center",
        padding:"9rem 5% 5rem", position:"relative", overflow:"hidden", background:"#f8f7f3" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(#e0dfd8 1px,transparent 1px),linear-gradient(90deg,#e0dfd8 1px,transparent 1px)", backgroundSize:"60px 60px", opacity:0.5, pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:550, height:550, background:"radial-gradient(circle,rgba(201,162,39,0.18) 0%,transparent 70%)", top:"-5%", right:"-5%", pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:350, height:350, background:"radial-gradient(circle,rgba(30,58,138,0.12) 0%,transparent 70%)", bottom:"5%", left:"5%", pointerEvents:"none" }} />
        <div style={{ position:"relative", maxWidth:820, animation:"fadeUp 0.8s ease forwards" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem",
            background:"#fef3c7", color:"#92400e", padding:"0.35rem 1rem",
            borderRadius:50, fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.06em",
            textTransform:"uppercase", marginBottom:"1.5rem", border:"1px solid #fde68a" }}>
            <span style={{ width:7, height:7, background:"#d97706", borderRadius:"50%",
              display:"inline-block", animation:"pulse 1.5s infinite" }} />
            New Batches Open — Flutter & Next.js 15
          </div>
          <h1 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2.8rem,6vw,5.2rem)",
            fontWeight:800, lineHeight:1.05, letterSpacing:"-0.04em",
            marginBottom:"1.5rem", color:"#0d0d1a" }}>
            Build Real Products.<br />
            Learn Real <span style={{ color:"#1e3a8a", borderBottom:"4px solid #c9a227",
              paddingBottom:"0.1rem" }}>Skills.</span>
          </h1>
          <p style={{ fontSize:"1.1rem", color:"#4a4a5a", maxWidth:560, marginBottom:"2.5rem", lineHeight:1.75 }}>
            Uniyal's Web Tech Solution offers enterprise software services and industry-aligned online courses — web, mobile, cloud, and AI.
          </p>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <Link to="/courses" style={{ background:"#0d0d1a", color:"#fff", padding:"0.9rem 2.2rem",
              borderRadius:50, fontSize:"1rem", fontWeight:500, textDecoration:"none",
              display:"inline-block", transition:"background 0.2s" }}>Explore Courses</Link>
            <Link to="/services" style={{ background:"transparent", color:"#0d0d1a",
              padding:"0.9rem 2.2rem", borderRadius:50, border:"2px solid #0d0d1a",
              fontSize:"1rem", fontWeight:500, textDecoration:"none", display:"inline-block" }}>Our Services</Link>
          </div>
          <div style={{ display:"flex", gap:"2.5rem", marginTop:"3rem", flexWrap:"wrap" }}>
            {[["12,000+","Students Enrolled"],["80+","Courses Available"],["150+","Projects Delivered"],["4.9★","Avg Rating"]].map(([n,l]) => (
              <div key={l} style={{ borderLeft:"3px solid #c9a227", paddingLeft:"1rem" }}>
                <div style={{ fontFamily:"'Syne',serif", fontSize:"1.8rem", fontWeight:800 }}>{n}</div>
                <div style={{ fontSize:"0.82rem", color:"#7a7a8a" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background:"#fff", borderTop:"1px solid #e5e3db", borderBottom:"1px solid #e5e3db", padding:"1.25rem 0", overflow:"hidden" }}>
        <div style={{ display:"flex", gap:"1.5rem", width:"max-content", animation:"ticker 40s linear infinite" }}>
          {tickerItems.map((t,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.5rem",
              background:"#f8f7f3", border:"1px solid #e5e3db", borderRadius:50,
              padding:"0.35rem 1rem", whiteSpace:"nowrap", fontSize:"0.83rem", fontWeight:500 }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#c9a227", display:"inline-block" }} />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section bg="#0d0d1a" id="services">
        <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>What We Build</div>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800,
          color:"#fff", marginBottom:"0.8rem", letterSpacing:"-0.03em" }}>Software Services</h2>
        <p style={{ color:"#8080a0", fontSize:"1rem", maxWidth:540, marginBottom:"3rem" }}>
          From MVPs to enterprise platforms — scalable, production-ready software.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
          {SERVICES.map(s => (
            <Link to={`/services/${s.id}`} key={s.id}
              style={{ background:"#161625", border:"1px solid #2a2a3a", borderRadius:14,
                padding:"1.75rem", textDecoration:"none", display:"block",
                transition:"border-color 0.25s,transform 0.25s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#c9a227";e.currentTarget.style.transform="translateY(-4px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#2a2a3a";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{ width:48, height:48, borderRadius:10, background:s.color+"22",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"1.5rem", marginBottom:"1.25rem" }}>{s.icon}</div>
              <div style={{ fontFamily:"'Syne',serif", fontSize:"1.05rem", fontWeight:700,
                color:"#fff", marginBottom:"0.5rem" }}>{s.title}</div>
              <div style={{ fontSize:"0.88rem", color:"#7070a0", lineHeight:1.65 }}>{s.desc}</div>
              <div style={{ marginTop:"1rem", color:"#c9a227", fontSize:"0.83rem", fontWeight:600 }}>Learn more →</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
          <Link to="/services" style={{ background:"#c9a227", color:"#0d0d1a",
            padding:"0.85rem 2.5rem", borderRadius:50, fontWeight:700, textDecoration:"none",
            fontSize:"1rem", display:"inline-block" }}>View All Services</Link>
        </div>
      </Section>

      {/* COURSES */}
      <Section bg="#f8f7f3" id="courses">
        <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>Online Learning</div>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800,
          marginBottom:"0.8rem", letterSpacing:"-0.03em" }}>Explore Our Courses</h2>
        <p style={{ fontSize:"1rem", color:"#4a4a5a", maxWidth:540, marginBottom:"3rem" }}>
          Hands-on, project-based courses taught by industry professionals.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:"1.5rem" }}>
          {COURSES.slice(0,8).map(c => (
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
                    textTransform:"uppercase", letterSpacing:"0.06em",
                    background: c.badge==="HOT"?"#fff1f3":c.badge==="NEW"?"#e8fff5":"#eeeeff",
                    color: c.badge==="HOT"?"#e0003c":c.badge==="NEW"?"#00a875":"#2020cc" }}>
                    {c.badge}
                  </span>
                )}
              </div>
              <div style={{ padding:"1.25rem" }}>
                <div style={{ fontSize:"0.7rem", fontWeight:700, color:"#1e3a8a",
                  textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"0.4rem" }}>{c.tag}</div>
                <div style={{ fontFamily:"'Syne',serif", fontSize:"0.95rem", fontWeight:700,
                  color:"#0d0d1a", lineHeight:1.35, marginBottom:"0.75rem" }}>{c.name}</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
                  borderTop:"1px solid #e5e3db", paddingTop:"0.75rem" }}>
                  <span style={{ fontSize:"0.8rem", color:"#7a7a8a" }}>
                    <span style={{ color:"#f5a623" }}>★</span> {c.rating} ({c.reviews})
                  </span>
                  <span style={{ fontSize:"0.8rem", color:"#7a7a8a" }}>📚 {c.hours}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
          <Link to="/courses" style={{ background:"#0d0d1a", color:"#fff",
            padding:"0.85rem 2.5rem", borderRadius:50, fontWeight:600,
            textDecoration:"none", fontSize:"1rem", display:"inline-block" }}>View All Courses</Link>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section bg="#fff">
        <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>The Process</div>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800,
          marginBottom:"0.8rem", letterSpacing:"-0.03em" }}>How It Works</h2>
        <p style={{ fontSize:"1rem", color:"#4a4a5a", maxWidth:540, marginBottom:"3rem" }}>
          Get started in minutes. Pick a plan, access all courses, build real projects.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"2rem" }}>
          {[["1","Create Account","Sign up in under 60 seconds. No credit card required to explore."],
            ["2","Choose Plan","Select the subscription that fits your goals."],
            ["3","Access Courses","Unlock 80+ courses immediately. Learn at your own pace."],
            ["4","Get Certified","Complete projects and earn a certificate to boost your resume."]].map(([n,t,d]) => (
            <div key={n} style={{ textAlign:"center" }}>
              <div style={{ width:60, height:60, border:"2px solid #c9a227", borderRadius:"50%",
                display:"flex", alignItems:"center", justifyContent:"center",
                margin:"0 auto 1rem", fontFamily:"'Syne',serif",
                fontSize:"1.4rem", fontWeight:800, color:"#c9a227" }}>{n}</div>
              <div style={{ fontFamily:"'Syne',serif", fontSize:"1rem", fontWeight:700, marginBottom:"0.4rem" }}>{t}</div>
              <div style={{ fontSize:"0.87rem", color:"#4a4a5a" }}>{d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING PREVIEW */}
      <Section bg="#f8f7f3">
        <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>Subscription Plans</div>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800,
          marginBottom:"0.8rem", letterSpacing:"-0.03em" }}>Simple, Transparent Pricing</h2>
        <p style={{ fontSize:"1rem", color:"#4a4a5a", maxWidth:540, marginBottom:"3rem" }}>
          All plans include unlimited course access. Cancel anytime.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"1.5rem", maxWidth:960 }}>
          {PLANS.map(p => (
            <Link to="/pricing" key={p.id}
              style={{ background: p.featured?"#0d0d1a":"#fff",
                border: p.featured?"2px solid #c9a227":"1px solid #e5e3db",
                borderRadius:14, padding:"2rem", position:"relative", textDecoration:"none",
                display:"block", transition:"transform 0.25s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
              {p.featured && (
                <div style={{ position:"absolute", top:-13, left:"50%", transform:"translateX(-50%)",
                  background:"#c9a227", color:"#0d0d1a", fontSize:"0.7rem", fontWeight:700,
                  padding:"0.3rem 0.9rem", borderRadius:50, whiteSpace:"nowrap" }}>Most Popular</div>
              )}
              <div style={{ fontFamily:"'Syne',serif", fontSize:"1.1rem", fontWeight:700,
                color:p.featured?"#fff":"#0d0d1a", marginBottom:"0.4rem" }}>{p.name}</div>
              <div style={{ fontFamily:"'Syne',serif", fontSize:"2.4rem", fontWeight:800,
                letterSpacing:"-0.04em", color:p.featured?"#fff":"#0d0d1a" }}>
                {p.price}<span style={{ fontSize:"1rem", fontWeight:400,
                  color:p.featured?"#8080b8":"#7a7a8a" }}>{p.period}</span>
              </div>
              <div style={{ fontSize:"0.87rem", color:p.featured?"#8080b8":"#7a7a8a",
                margin:"0.5rem 0 1.5rem" }}>{p.desc}</div>
              <ul style={{ listStyle:"none", padding:0, margin:"0 0 1.5rem", display:"flex",
                flexDirection:"column", gap:"0.55rem" }}>
                {p.features.slice(0,4).map(f => (
                  <li key={f} style={{ fontSize:"0.87rem", display:"flex", gap:"0.6rem", alignItems:"flex-start" }}>
                    <span style={{ width:18, height:18, borderRadius:"50%", flexShrink:0,
                      display:"inline-flex", alignItems:"center", justifyContent:"center",
                      fontSize:"0.6rem", fontWeight:700, marginTop:2,
                      background:p.featured?"#2a2a6a":"#e8e8ff", color:p.featured?"#8080ff":"#1e3a8a" }}>✓</span>
                    <span style={{ color:p.featured?"#c0c0e0":"#3a3a4a" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ color:p.featured?"#c9a227":"#1e3a8a", fontSize:"0.87rem", fontWeight:600 }}>
                View full plan details →
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2rem" }}>
          <Link to="/pricing" style={{ background:"#0d0d1a", color:"#fff",
            padding:"0.85rem 2.5rem", borderRadius:50, fontWeight:600,
            textDecoration:"none", fontSize:"1rem", display:"inline-block" }}>See All Plan Details</Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section bg="#fff">
        <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"#c9a227", marginBottom:"0.6rem" }}>Student Love</div>
        <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800,
          marginBottom:"0.8rem", letterSpacing:"-0.03em" }}>What Our Students Say</h2>
        <p style={{ fontSize:"1rem", color:"#4a4a5a", maxWidth:540, marginBottom:"3rem" }}>
          Thousands of learners have upgraded their careers.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:"1.5rem" }}>
          {TESTIMONIALS.slice(0,3).map(t => (
            <Link to={`/testimonials`} key={t.id}
              style={{ background:"#f8f7f3", border:"1px solid #e5e3db", borderRadius:14,
                padding:"1.5rem", textDecoration:"none", display:"block",
                transition:"transform 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
              <div style={{ color:"#f5a623", fontSize:"1rem", marginBottom:"0.75rem" }}>★★★★★</div>
              <p style={{ fontSize:"0.91rem", color:"#4a4a5a", lineHeight:1.65,
                marginBottom:"1.25rem", fontStyle:"italic" }}>"{t.text.slice(0,160)}..."</p>
              <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:t.color,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"0.82rem", fontWeight:700, color:"#fff", flexShrink:0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize:"0.87rem", fontWeight:600, color:"#0d0d1a" }}>{t.name}</div>
                  <div style={{ fontSize:"0.76rem", color:"#7a7a8a" }}>{t.role}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2rem" }}>
          <Link to="/testimonials" style={{ background:"transparent", color:"#0d0d1a",
            padding:"0.85rem 2.5rem", borderRadius:50, border:"2px solid #0d0d1a",
            fontWeight:600, textDecoration:"none", fontSize:"1rem", display:"inline-block" }}>Read All Stories</Link>
        </div>
      </Section>

      {/* CTA */}
      <section style={{ background:"#0d0d1a", padding:"6rem 5%", textAlign:"center" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Syne',serif", fontSize:"clamp(2rem,5vw,3.5rem)",
            fontWeight:800, letterSpacing:"-0.04em", color:"#fff", marginBottom:"1rem" }}>
            Ready to Level Up?
          </h2>
          <p style={{ color:"#8080a8", fontSize:"1.05rem", maxWidth:480, margin:"0 auto 2rem" }}>
            Join 12,000+ developers learning and building with Uniyal's Web Tech Solution.
          </p>
          <Link to="/pricing" style={{ background:"#c9a227", color:"#0d0d1a",
            padding:"1rem 2.5rem", borderRadius:50, fontWeight:700,
            textDecoration:"none", fontSize:"1.05rem", display:"inline-block" }}>
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
