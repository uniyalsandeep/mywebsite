import { Link } from "react-router-dom";
import { TEAM } from "../data/data";

export default function About() {
  return (
    <div style={{paddingTop:80}}>
      <div style={{background:"#0d0d1a",padding:"5rem 5% 4rem"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>About Us</div>
          <h1 style={{fontFamily:"'Syne',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,color:"#fff",marginBottom:"1rem",letterSpacing:"-0.03em"}}>Innovation Through Code</h1>
          <p style={{color:"#8080a0",fontSize:"1.1rem",maxWidth:620,lineHeight:1.75}}>Uniyal's Web Tech Solution is a Dehradun-based software company and online learning platform helping developers and businesses grow through technology.</p>
        </div>
      </div>

      <div style={{padding:"5rem 5%",background:"#f8f7f3"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          {/* Story */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",marginBottom:"5rem",alignItems:"center"}} className="about-grid">
            <div>
              <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>Our Story</div>
              <h2 style={{fontFamily:"'Syne',serif",fontSize:"2.2rem",fontWeight:800,marginBottom:"1.25rem",letterSpacing:"-0.03em"}}>Built by developers,<br/>for developers</h2>
              <p style={{fontSize:"0.95rem",color:"#4a4a5a",lineHeight:1.8,marginBottom:"1rem"}}>Founded in 2021 by Rahul Uniyal, we started as a freelance web development studio in Dehradun. After building 50+ projects for clients across India, we realized the biggest gap wasn't in tools — it was in quality education that matches real industry needs.</p>
              <p style={{fontSize:"0.95rem",color:"#4a4a5a",lineHeight:1.8,marginBottom:"1.5rem"}}>In 2022, we launched our online learning platform. Today, 12,000+ students trust Uniyal's Web Tech Solution to learn modern development skills and land their dream jobs.</p>
              <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
                {[["2021","Founded"],["12,000+","Students"],["150+","Projects"],["4.9★","Rating"]].map(([n,l])=>(
                  <div key={l} style={{borderLeft:"3px solid #c9a227",paddingLeft:"1rem"}}>
                    <div style={{fontFamily:"'Syne',serif",fontSize:"1.6rem",fontWeight:800,color:"#0d0d1a"}}>{n}</div>
                    <div style={{fontSize:"0.78rem",color:"#7a7a8a"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
              {[["🎯","Mission","Make quality tech education accessible to every developer in India."],["👁️","Vision","Become India's most trusted platform for both software services and online learning."],["💎","Values","Quality over quantity. Real projects. Honest mentorship."],["🌱","Impact","Every course we create, every project we deliver changes someone's career."]].map(([icon,title,desc])=>(
                <div key={title} style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:14,padding:"1.5rem"}}>
                  <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>{icon}</div>
                  <div style={{fontFamily:"'Syne',serif",fontWeight:700,marginBottom:"0.4rem"}}>{title}</div>
                  <div style={{fontSize:"0.85rem",color:"#4a4a5a",lineHeight:1.6}}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>Our Team</div>
          <h2 style={{fontFamily:"'Syne',serif",fontSize:"2.2rem",fontWeight:800,marginBottom:"0.75rem",letterSpacing:"-0.03em"}}>Meet the Instructors</h2>
          <p style={{fontSize:"1rem",color:"#4a4a5a",maxWidth:540,marginBottom:"3rem"}}>Industry professionals with real-world experience who are passionate about teaching.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1.5rem",marginBottom:"5rem"}}>
            {TEAM.map(m=>(
              <div key={m.name} style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:16,padding:"2rem",textAlign:"center",transition:"transform 0.25s,box-shadow 0.25s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.08)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{width:80,height:80,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",fontWeight:800,color:"#fff",margin:"0 auto 1.25rem",border:"3px solid #c9a22733"}}>{m.initials}</div>
                <div style={{fontFamily:"'Syne',serif",fontSize:"1.1rem",fontWeight:700,marginBottom:"0.25rem"}}>{m.name}</div>
                <div style={{fontSize:"0.82rem",color:"#c9a227",fontWeight:600,marginBottom:"1rem"}}>{m.role}</div>
                <p style={{fontSize:"0.85rem",color:"#4a4a5a",lineHeight:1.7,marginBottom:"1.25rem"}}>{m.bio}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem",justifyContent:"center",marginBottom:"1.25rem"}}>
                  {m.expertise.map(e=>(
                    <span key={e} style={{background:"#f0f4ff",color:"#1e3a8a",fontSize:"0.72rem",fontWeight:600,padding:"0.2rem 0.6rem",borderRadius:50,border:"1px solid #c7d7ff"}}>{e}</span>
                  ))}
                </div>
                <div style={{display:"flex",justifyContent:"center",gap:"2rem",borderTop:"1px solid #e5e3db",paddingTop:"1rem"}}>
                  <div><div style={{fontFamily:"'Syne',serif",fontWeight:800,color:"#0d0d1a"}}>{m.courses}</div><div style={{fontSize:"0.72rem",color:"#7a7a8a"}}>Courses</div></div>
                  <div><div style={{fontFamily:"'Syne',serif",fontWeight:800,color:"#0d0d1a"}}>{m.students.toLocaleString()}+</div><div style={{fontSize:"0.72rem",color:"#7a7a8a"}}>Students</div></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{background:"#0d0d1a",borderRadius:20,padding:"3.5rem",textAlign:"center"}}>
            <h2 style={{fontFamily:"'Syne',serif",fontSize:"2rem",fontWeight:800,color:"#fff",marginBottom:"0.75rem"}}>Want to Join Our Team?</h2>
            <p style={{color:"#8080a8",marginBottom:"2rem"}}>We're always looking for passionate developers and educators. Reach out!</p>
            <Link to="/contact" style={{background:"#c9a227",color:"#0d0d1a",padding:"0.9rem 2.5rem",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"1rem",display:"inline-block"}}>Get in Touch</Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
