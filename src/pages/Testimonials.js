import { TESTIMONIALS } from "../data/data";
export default function Testimonials() {
  return (
    <div style={{paddingTop:80}}>
      <div style={{background:"#0d0d1a",padding:"5rem 5% 4rem",textAlign:"center"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>Student Love</div>
          <h1 style={{fontFamily:"'Syne',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,color:"#fff",marginBottom:"1rem",letterSpacing:"-0.03em"}}>Real Stories, Real Results</h1>
          <p style={{color:"#8080a0",fontSize:"1.1rem",maxWidth:560,margin:"0 auto"}}>Thousands of developers have transformed their careers with Uniyal's Web Tech Solution.</p>
          <div style={{display:"flex",justifyContent:"center",gap:"3rem",marginTop:"2.5rem",flexWrap:"wrap"}}>
            {[["12,000+","Students"],["4.9★","Average Rating"],["95%","Completion Rate"],["80%","Got Hired / Promoted"]].map(([n,l])=>(
              <div key={l}><div style={{fontFamily:"'Syne',serif",fontSize:"1.8rem",fontWeight:800,color:"#c9a227"}}>{n}</div><div style={{fontSize:"0.82rem",color:"#7070a0"}}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div style={{padding:"5rem 5%",background:"#f8f7f3"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5rem"}}>
            {TESTIMONIALS.map(t=>(
              <div key={t.id} style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:16,padding:"2rem",transition:"transform 0.25s,box-shadow 0.25s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.08)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"}}>
                  <div style={{color:"#f5a623",fontSize:"1.1rem",letterSpacing:"0.1em"}}>{"★".repeat(t.rating)}</div>
                  <span style={{fontSize:"0.75rem",color:"#7a7a8a",background:"#f8f7f3",padding:"0.2rem 0.6rem",borderRadius:50,border:"1px solid #e5e3db"}}>{t.joined}</span>
                </div>
                <p style={{fontSize:"0.92rem",color:"#3a3a4a",lineHeight:1.75,marginBottom:"1.5rem",fontStyle:"italic"}}>"{t.text}"</p>
                <div style={{background:"#f0f4ff",borderRadius:8,padding:"0.6rem 0.9rem",marginBottom:"1.25rem",fontSize:"0.8rem",color:"#1e3a8a",fontWeight:600}}>📚 Course: {t.course}</div>
                <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:t.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",fontWeight:700,color:"#fff",flexShrink:0}}>{t.initials}</div>
                  <div>
                    <div style={{fontSize:"0.9rem",fontWeight:700,color:"#0d0d1a"}}>{t.name}</div>
                    <div style={{fontSize:"0.78rem",color:"#7a7a8a"}}>{t.role}</div>
                    <div style={{fontSize:"0.75rem",color:"#7a7a8a"}}>📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
