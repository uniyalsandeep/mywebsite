import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../data/data";

export default function CourseDetail() {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(0);
  const c = COURSES.find(x => x.id === id);
  if (!c) return <div style={{padding:"10rem 5%",textAlign:"center"}}><h2>Course not found</h2><Link to="/courses">← Back</Link></div>;

  return (
    <div style={{paddingTop:80}}>
      <div style={{background:"#0d0d1a",padding:"5rem 5% 4rem"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <Link to="/courses" style={{color:"#c9a227",fontSize:"0.87rem",textDecoration:"none",display:"inline-block",marginBottom:"1.5rem"}}>← All Courses</Link>
          <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
            <span style={{background:"#1e3a8a22",color:"#7090ff",fontSize:"0.75rem",fontWeight:700,padding:"0.3rem 0.75rem",borderRadius:50,border:"1px solid #1e3a8a44"}}>{c.tag}</span>
            <span style={{background:"#c9a22722",color:"#c9a227",fontSize:"0.75rem",fontWeight:700,padding:"0.3rem 0.75rem",borderRadius:50,border:"1px solid #c9a22744"}}>{c.level}</span>
            {c.badge&&<span style={{background:c.badge==="HOT"?"#fff1f322":c.badge==="NEW"?"#e8fff522":"#eeeeff22",color:c.badge==="HOT"?"#ff6080":c.badge==="NEW"?"#00c896":"#8080ff",fontSize:"0.75rem",fontWeight:700,padding:"0.3rem 0.75rem",borderRadius:50}}>{c.badge}</span>}
          </div>
          <h1 style={{fontFamily:"'Syne',serif",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:800,color:"#fff",marginBottom:"1rem",letterSpacing:"-0.03em",maxWidth:700}}>{c.name}</h1>
          <p style={{color:"#a0a0c0",fontSize:"1rem",maxWidth:620,lineHeight:1.75,marginBottom:"2rem"}}>{c.desc}</p>
          <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
            {[[`★ ${c.rating}`,"Rating"],[c.reviews,"Students rated"],[c.hours,"of content"],[`${c.lessons} lessons`,"Total lessons"]].map(([v,l])=>(
              <div key={l}><div style={{fontFamily:"'Syne',serif",fontSize:"1.3rem",fontWeight:800,color:"#c9a227"}}>{v}</div><div style={{fontSize:"0.78rem",color:"#7070a0"}}>{l}</div></div>
            ))}
          </div>
          <div style={{marginTop:"1.5rem",fontSize:"0.87rem",color:"#8080a0"}}>Instructor: <span style={{color:"#fff",fontWeight:600}}>{c.instructor}</span> · {c.students} students enrolled</div>
        </div>
      </div>

      <div style={{padding:"5rem 5%",background:"#f8f7f3"}}>
        <div style={{maxWidth:1400,margin:"0 auto",display:"grid",gridTemplateColumns:"2fr 1fr",gap:"3rem"}} className="course-detail-grid">
          <div>
            {/* What you'll learn */}
            <div style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:14,padding:"2rem",marginBottom:"2rem"}}>
              <h2 style={{fontFamily:"'Syne',serif",fontSize:"1.4rem",fontWeight:800,marginBottom:"1.25rem"}}>What You'll Learn</h2>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
                {c.whatYouLearn.map(w=>(
                  <div key={w} style={{display:"flex",gap:"0.65rem",alignItems:"flex-start"}}>
                    <span style={{color:"#00a875",fontWeight:700,flexShrink:0,marginTop:2}}>✓</span>
                    <span style={{fontSize:"0.88rem",color:"#3a3a4a"}}>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <h2 style={{fontFamily:"'Syne',serif",fontSize:"1.4rem",fontWeight:800,marginBottom:"1.25rem"}}>Course Curriculum</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"2rem"}}>
              {c.curriculum.map((sec,i)=>(
                <div key={i} style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:12,overflow:"hidden"}}>
                  <button onClick={()=>setOpenSection(openSection===i?-1:i)}
                    style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.25rem",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
                    <span style={{fontWeight:700,fontSize:"0.95rem",color:"#0d0d1a"}}>{sec.section}</span>
                    <span style={{color:"#7a7a8a",fontSize:"0.82rem"}}>{sec.lessons.length} lessons {openSection===i?"▲":"▼"}</span>
                  </button>
                  {openSection===i&&(
                    <div style={{borderTop:"1px solid #e5e3db"}}>
                      {sec.lessons.map((l,j)=>(
                        <div key={j} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1.25rem",borderBottom:j<sec.lessons.length-1?"1px solid #f0efeb":"none"}}>
                          <span style={{width:24,height:24,borderRadius:"50%",background:"#f0f4ff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",color:"#1e3a8a",fontWeight:700,flexShrink:0}}>▶</span>
                          <span style={{fontSize:"0.88rem",color:"#3a3a4a"}}>{l}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:14,padding:"2rem"}}>
              <h2 style={{fontFamily:"'Syne',serif",fontSize:"1.4rem",fontWeight:800,marginBottom:"1rem"}}>Requirements</h2>
              {c.requirements.map(r=>(
                <div key={r} style={{display:"flex",gap:"0.65rem",marginBottom:"0.6rem"}}>
                  <span style={{color:"#c9a227",fontWeight:700,flexShrink:0}}>•</span>
                  <span style={{fontSize:"0.88rem",color:"#4a4a5a"}}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{background:"#fff",border:"2px solid #c9a227",borderRadius:16,padding:"2rem",position:"sticky",top:100}}>
              <div style={{fontSize:"0.82rem",color:"#7a7a8a",marginBottom:"0.25rem"}}>Access this course with</div>
              <div style={{fontFamily:"'Syne',serif",fontSize:"1.5rem",fontWeight:800,color:"#0d0d1a",marginBottom:"0.25rem"}}>{c.price}</div>
              <div style={{fontSize:"0.82rem",color:"#00a875",fontWeight:600,marginBottom:"1.5rem"}}>✓ Included in subscription</div>
              <Link to="/pricing" style={{display:"block",background:"#0d0d1a",color:"#fff",padding:"0.9rem",borderRadius:50,textAlign:"center",fontWeight:700,textDecoration:"none",fontSize:"1rem",marginBottom:"0.75rem"}}>Subscribe Now</Link>
              <Link to="/pricing" style={{display:"block",background:"#c9a22718",color:"#c9a227",padding:"0.9rem",borderRadius:50,textAlign:"center",fontWeight:700,textDecoration:"none",fontSize:"0.9rem",border:"1px solid #c9a22744"}}>View All Plans</Link>
              <div style={{borderTop:"1px solid #e5e3db",paddingTop:"1.25rem",marginTop:"1.5rem"}}>
                {[["📚",`${c.lessons} lessons`],["⏱️",c.hours+" of video"],["📱","Mobile access"],["🏆","Certificate included"],["♾️","Lifetime access"]].map(([icon,text])=>(
                  <div key={text} style={{display:"flex",gap:"0.75rem",marginBottom:"0.65rem",fontSize:"0.87rem",color:"#3a3a4a"}}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.course-detail-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
