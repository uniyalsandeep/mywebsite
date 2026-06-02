import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LOGO_SRC from "../data/logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navBg = scrolled || menuOpen ? "rgba(248,247,243,0.97)" : "transparent";
  const borderB = scrolled || menuOpen ? "1px solid #e5e3db" : "none";

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200,
      background: navBg, backdropFilter: "blur(16px)",
      borderBottom: borderB, transition:"all 0.3s ease" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0.75rem 5%", maxWidth:1400, margin:"0 auto" }}>
        {/* Logo */}
        <Link to="/" style={{ display:"flex", alignItems:"center", gap:"0.75rem", textDecoration:"none" }}>
          <img src={LOGO_SRC} alt="Uniyal's Logo" style={{ height:52, width:"auto", objectFit:"contain" }} />
          <div style={{ display:"flex", flexDirection:"column" }}>
            <span style={{ fontFamily:"'Syne',serif", fontWeight:800, fontSize:"1.2rem",
              color:"#0d0d1a", letterSpacing:"-0.02em", lineHeight:1.1 }}>UNIYAL'S</span>
            <span style={{ fontSize:"0.63rem", color:"#c9a227", fontWeight:700,
              letterSpacing:"0.05em", textTransform:"uppercase" }}>Web Tech Solution</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display:"flex", gap:"2rem", alignItems:"center" }} className="desktop-nav">
          {[["Services","/services"],["Courses","/courses"],["Pricing","/pricing"],
            ["About","/about"],["Contact","/contact"]].map(([label,to]) => (
            <Link key={to} to={to} style={{ color:"#3a3a4a", fontSize:"0.9rem", fontWeight:500,
              textDecoration:"none", transition:"color 0.2s",
              ...(location.pathname===to?{color:"#1e3a8a",fontWeight:700}:{}) }}>
              {label}
            </Link>
          ))}
          <Link to="/courses" style={{ background:"#0d0d1a", color:"#fff", border:"none",
            padding:"0.6rem 1.4rem", borderRadius:50, fontSize:"0.9rem", fontWeight:500,
            cursor:"pointer", textDecoration:"none", display:"inline-block" }}>
            Start Learning
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)}
          style={{ display:"none", background:"none", border:"none", cursor:"pointer",
            fontSize:"1.5rem", color:"#0d0d1a" }} className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ padding:"1rem 5% 1.5rem", borderTop:"1px solid #e5e3db",
          display:"flex", flexDirection:"column", gap:"1rem" }}>
          {[["Services","/services"],["Courses","/courses"],["Pricing","/pricing"],
            ["About","/about"],["Contact","/contact"]].map(([label,to]) => (
            <Link key={to} to={to} style={{ color:"#0d0d1a", fontSize:"1rem",
              fontWeight:500, textDecoration:"none", padding:"0.4rem 0" }}>
              {label}
            </Link>
          ))}
          <Link to="/courses" style={{ background:"#0d0d1a", color:"#fff",
            padding:"0.75rem 1.5rem", borderRadius:50, fontSize:"1rem", fontWeight:500,
            textDecoration:"none", textAlign:"center", marginTop:"0.5rem" }}>
            Start Learning
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .hamburger{display:block!important}
        }
      `}</style>
    </nav>
  );
}
