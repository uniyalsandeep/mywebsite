import { useState } from "react";
import { Link } from "react-router-dom";
import { PLANS, FAQS } from "../data/data";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{paddingTop:80}}>
      <div style={{background:"#0d0d1a",padding:"5rem 5% 4rem",textAlign:"center"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>Pricing</div>
          <h1 style={{fontFamily:"'Syne',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,color:"#fff",marginBottom:"1rem",letterSpacing:"-0.03em"}}>Simple, Transparent Pricing</h1>
          <p style={{color:"#8080a0",fontSize:"1.1rem",maxWidth:500,margin:"0 auto 2rem"}}>All plans include unlimited course access. Cancel anytime. No hidden fees.</p>
          <div style={{display:"inline-flex",alignItems:"center",gap:"1rem",background:"#1a1a2e",borderRadius:50,padding:"0.4rem 0.5rem"}}>
            <button onClick={()=>setAnnual(false)} style={{padding:"0.5rem 1.25rem",borderRadius:50,border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",background:!annual?"#fff":"transparent",color:!annual?"#0d0d1a":"#8080a0",transition:"all 0.2s"}}>Monthly</button>
            <button onClick={()=>setAnnual(true)} style={{padding:"0.5rem 1.25rem",borderRadius:50,border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",background:annual?"#c9a227":"transparent",color:annual?"#0d0d1a":"#8080a0",transition:"all 0.2s"}}>Annual <span style={{fontSize:"0.72rem",marginLeft:"0.25rem"}}>Save 20%</span></button>
          </div>
        </div>
      </div>

      <div style={{padding:"5rem 5%",background:"#f8f7f3"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.5rem",marginBottom:"5rem"}}>
            {PLANS.map(p=>(
              <div key={p.id} style={{background:p.featured?"#0d0d1a":"#fff",border:p.featured?"2px solid #c9a227":"1px solid #e5e3db",borderRadius:16,padding:"2.5rem",position:"relative",transition:"transform 0.25s"}}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-5px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                {p.featured&&<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",background:"#c9a227",color:"#0d0d1a",fontSize:"0.72rem",fontWeight:800,padding:"0.3rem 1rem",borderRadius:50,whiteSpace:"nowrap",letterSpacing:"0.07em"}}>MOST POPULAR</div>}
                <div style={{fontFamily:"'Syne',serif",fontSize:"1.1rem",fontWeight:700,color:p.featured?"#fff":"#0d0d1a",marginBottom:"0.4rem"}}>{p.name}</div>
                <div style={{fontFamily:"'Syne',serif",fontSize:"2.8rem",fontWeight:800,letterSpacing:"-0.05em",color:p.featured?"#fff":"#0d0d1a",lineHeight:1}}>
                  {annual?p.annualPrice:p.price}
                  <span style={{fontSize:"1rem",fontWeight:400,color:p.featured?"#8080b8":"#7a7a8a"}}>{p.period}</span>
                </div>
                {annual&&<div style={{fontSize:"0.78rem",color:"#00c896",fontWeight:600,marginTop:"0.3rem",marginBottom:"0.5rem"}}>Save ₹{parseInt(p.price.replace("₹","").replace(",",""))*12 - parseInt(p.annualPrice.replace("₹","").replace(",",""))*12} per year</div>}
                <div style={{fontSize:"0.87rem",color:p.featured?"#8080b8":"#7a7a8a",margin:"0.5rem 0 1.5rem"}}>{p.desc}</div>
                <ul style={{listStyle:"none",padding:0,margin:"0 0 2rem",display:"flex",flexDirection:"column",gap:"0.65rem"}}>
                  {p.features.map(f=>(
                    <li key={f} style={{display:"flex",gap:"0.65rem",alignItems:"flex-start"}}>
                      <span style={{width:18,height:18,borderRadius:"50%",background:p.featured?"#2a2a6a":"#e8e8ff",color:p.featured?"#8080ff":"#1e3a8a",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:700,flexShrink:0,marginTop:2}}>✓</span>
                      <span style={{fontSize:"0.87rem",color:p.featured?"#c0c0e0":"#3a3a4a"}}>{f}</span>
                    </li>
                  ))}
                  {p.notIncluded.map(f=>(
                    <li key={f} style={{display:"flex",gap:"0.65rem",alignItems:"flex-start",opacity:0.4}}>
                      <span style={{width:18,height:18,borderRadius:"50%",background:"#e0e0e0",color:"#9090a0",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:700,flexShrink:0,marginTop:2}}>✕</span>
                      <span style={{fontSize:"0.87rem",color:p.featured?"#808090":"#7a7a8a",textDecoration:"line-through"}}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" style={{display:"block",background:p.featured?"#c9a227":"#0d0d1a",color:p.featured?"#0d0d1a":"#fff",padding:"0.9rem",borderRadius:50,textAlign:"center",fontWeight:700,textDecoration:"none",fontSize:"1rem",transition:"opacity 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.opacity="0.85"}
                  onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{fontFamily:"'Syne',serif",fontSize:"2rem",fontWeight:800,textAlign:"center",marginBottom:"2rem"}}>Frequently Asked Questions</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",maxWidth:700,margin:"0 auto"}}>
            {FAQS.map((f,i)=>(
              <div key={i} style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:12,overflow:"hidden"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                  style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
                  <span style={{fontWeight:600,fontSize:"0.95rem",color:"#0d0d1a",paddingRight:"1rem"}}>{f.q}</span>
                  <span style={{color:"#c9a227",fontSize:"1.2rem",flexShrink:0,transform:openFaq===i?"rotate(45deg)":"rotate(0)",transition:"transform 0.2s"}}>+</span>
                </button>
                {openFaq===i&&<div style={{padding:"0 1.5rem 1.25rem",fontSize:"0.9rem",color:"#4a4a5a",lineHeight:1.75,borderTop:"1px solid #f0efeb",paddingTop:"1rem"}}>{f.a}</div>}
              </div>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:"3rem",padding:"2.5rem",background:"#fff",borderRadius:16,border:"1px solid #e5e3db"}}>
            <h3 style={{fontFamily:"'Syne',serif",fontSize:"1.4rem",fontWeight:800,marginBottom:"0.5rem"}}>7-Day Money-Back Guarantee</h3>
            <p style={{color:"#4a4a5a",fontSize:"0.9rem",maxWidth:500,margin:"0 auto 1.5rem"}}>Not satisfied within 7 days? Get a full refund, no questions asked. We're confident you'll love it.</p>
            <Link to="/contact" style={{background:"#0d0d1a",color:"#fff",padding:"0.85rem 2rem",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"0.95rem",display:"inline-block"}}>Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
