import { Link } from "react-router-dom";
import LOGO_SRC from "../data/logo";

export default function Footer() {
  return (
    <footer style={{ background:"#06060f", color:"#5a5a7a", padding:"4rem 5% 2rem" }}>
      <div style={{ maxWidth:1400, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"3rem",
          marginBottom:"3rem" }} className="footer-grid">
          <div>
            <Link to="/" style={{ display:"flex", alignItems:"center", gap:"0.75rem",
              textDecoration:"none", marginBottom:"1rem" }}>
              <img src={LOGO_SRC} alt="Logo" style={{ height:44, width:"auto", objectFit:"contain" }} />
              <div>
                <div style={{ fontFamily:"'Syne',serif", fontWeight:800, fontSize:"1.1rem",
                  color:"#fff", letterSpacing:"-0.02em" }}>UNIYAL'S</div>
                <div style={{ fontSize:"0.62rem", color:"#c9a227", fontWeight:700,
                  letterSpacing:"0.05em", textTransform:"uppercase" }}>Web Tech Solution</div>
              </div>
            </Link>
            <p style={{ fontSize:"0.87rem", lineHeight:1.7, maxWidth:280 }}>
              Software services and online education platform for the next generation of developers.
            </p>
            <div style={{ display:"flex", gap:"1rem", marginTop:"1.5rem" }}>
              {["LinkedIn","Twitter","YouTube","GitHub"].map(s => (
                <Link key={s} to="/contact" style={{ fontSize:"0.75rem", color:"#5a5a7a",
                  border:"1px solid #2a2a3a", padding:"0.3rem 0.7rem", borderRadius:50,
                  textDecoration:"none", transition:"color 0.2s" }}>{s}</Link>
              ))}
            </div>
          </div>
          {[
            ["Courses",[["Web Development","/courses/html-css"],["React.js","/courses/react-js"],["Next.js","/courses/nextjs"],["Node.js","/courses/nodejs"],["Flutter","/courses/flutter"],["MongoDB","/courses/mongodb"],["AWS","/courses/aws"]]],
            ["Services",[["Web Apps","/services/web-development"],["Mobile Apps","/services/mobile-apps"],["Cloud & DevOps","/services/cloud-devops"],["Backend & APIs","/services/backend-apis"],["AI Integration","/services/ai-integration"],["UI/UX Design","/services/ui-ux-design"]]],
            ["Company",[["About Us","/about"],["Our Team","/about"],["Pricing","/pricing"],["Contact","/contact"],["Privacy Policy","/contact"],["Terms of Service","/contact"]]],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize:"0.8rem", fontWeight:700, textTransform:"uppercase",
                letterSpacing:"0.1em", color:"#9090b8", marginBottom:"1rem" }}>{title}</h4>
              <ul style={{ listStyle:"none", padding:0, margin:0,
                display:"flex", flexDirection:"column", gap:"0.55rem" }}>
                {links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} style={{ color:"#5a5a7a", textDecoration:"none",
                      fontSize:"0.87rem", transition:"color 0.2s" }}
                      onMouseEnter={e=>e.target.style.color="#fff"}
                      onMouseLeave={e=>e.target.style.color="#5a5a7a"}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid #1a1a2e", paddingTop:"1.5rem",
          display:"flex", justifyContent:"space-between", alignItems:"center",
          flexWrap:"wrap", gap:"0.5rem", fontSize:"0.82rem" }}>
          <span>© 2025 Uniyal's Web Tech Solution. All rights reserved.</span>
          <span>Innovation Through Code</span>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .footer-grid{grid-template-columns:1fr 1fr!important} }
        @media(max-width:480px){ .footer-grid{grid-template-columns:1fr!important} }
      `}</style>
    </footer>
  );
}
