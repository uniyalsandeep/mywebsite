import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",phone:"",subject:"",message:"",type:"general"});
  const [sent, setSent] = useState(false);
  const handle = e => setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit = e => { e.preventDefault(); setSent(true); };
  const inp = { width:"100%", padding:"0.85rem 1rem", borderRadius:10, border:"1px solid #e5e3db", fontSize:"0.95rem", fontFamily:"'DM Sans',sans-serif", background:"#fff", outline:"none", boxSizing:"border-box" };

  return (
    <div style={{paddingTop:80}}>
      <div style={{background:"#0d0d1a",padding:"5rem 5% 4rem"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#c9a227",marginBottom:"0.6rem"}}>Contact</div>
          <h1 style={{fontFamily:"'Syne',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,color:"#fff",marginBottom:"1rem",letterSpacing:"-0.03em"}}>Get In Touch</h1>
          <p style={{color:"#8080a0",fontSize:"1.1rem",maxWidth:520}}>Have a project in mind or want to learn more about our courses? We'd love to hear from you.</p>
        </div>
      </div>

      <div style={{padding:"5rem 5%",background:"#f8f7f3"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:"4rem",alignItems:"start"}} className="contact-grid">
          {/* Info */}
          <div>
            <h2 style={{fontFamily:"'Syne',serif",fontSize:"1.6rem",fontWeight:800,marginBottom:"2rem"}}>Contact Information</h2>
            {[["📍","Address","123 Tech Park, Rajpur Road, Dehradun, Uttarakhand 248001, India"],["📧","Email","hello@uniyals.in"],["📞","Phone","+91 98765 43210"],["🕐","Business Hours","Mon–Sat: 9:00 AM – 7:00 PM IST"]].map(([icon,label,val])=>(
              <div key={label} style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",alignItems:"flex-start"}}>
                <div style={{width:44,height:44,borderRadius:10,background:"#c9a22718",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0,border:"1px solid #c9a22733"}}>{icon}</div>
                <div><div style={{fontSize:"0.78rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#7a7a8a",marginBottom:"0.25rem"}}>{label}</div><div style={{fontSize:"0.95rem",color:"#0d0d1a",lineHeight:1.5}}>{val}</div></div>
              </div>
            ))}
            <div style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:14,padding:"1.5rem",marginTop:"2rem"}}>
              <div style={{fontFamily:"'Syne',serif",fontWeight:700,marginBottom:"1rem"}}>Follow Us</div>
              <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                {["LinkedIn","YouTube","Twitter","Instagram","GitHub"].map(s=>(
                  <span key={s} style={{background:"#f0f4ff",color:"#1e3a8a",fontSize:"0.8rem",fontWeight:600,padding:"0.35rem 0.85rem",borderRadius:50,border:"1px solid #c7d7ff",cursor:"pointer"}}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{background:"#fff",border:"1px solid #e5e3db",borderRadius:16,padding:"2.5rem"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"3rem 0"}}>
                <div style={{fontSize:"4rem",marginBottom:"1rem"}}>✅</div>
                <h3 style={{fontFamily:"'Syne',serif",fontSize:"1.5rem",fontWeight:800,marginBottom:"0.75rem"}}>Message Sent!</h3>
                <p style={{color:"#4a4a5a",marginBottom:"2rem"}}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={()=>setSent(false)} style={{background:"#0d0d1a",color:"#fff",padding:"0.75rem 1.75rem",borderRadius:50,border:"none",fontWeight:600,cursor:"pointer",fontSize:"0.95rem"}}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 style={{fontFamily:"'Syne',serif",fontSize:"1.4rem",fontWeight:800,marginBottom:"1.75rem"}}>Send a Message</h2>
                <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
                  <div style={{flex:1}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Full Name *</label><input required name="name" value={form.name} onChange={handle} placeholder="Your name" style={inp} /></div>
                  <div style={{flex:1}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Email *</label><input required name="email" type="email" value={form.email} onChange={handle} placeholder="you@email.com" style={inp} /></div>
                </div>
                <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
                  <div style={{flex:1}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Phone</label><input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" style={inp} /></div>
                  <div style={{flex:1}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Enquiry Type</label>
                    <select name="type" value={form.type} onChange={handle} style={{...inp,cursor:"pointer"}}>
                      <option value="general">General Enquiry</option>
                      <option value="courses">Courses & Subscription</option>
                      <option value="services">Software Services</option>
                      <option value="team">Team Plan</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </div>
                <div style={{marginBottom:"1rem"}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Subject *</label><input required name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" style={inp} /></div>
                <div style={{marginBottom:"1.75rem"}}><label style={{fontSize:"0.8rem",fontWeight:600,color:"#3a3a4a",display:"block",marginBottom:"0.4rem"}}>Message *</label><textarea required name="message" value={form.message} onChange={handle} placeholder="Tell us more about your project or question..." rows={5} style={{...inp,resize:"vertical"}} /></div>
                <button type="submit" style={{width:"100%",background:"#0d0d1a",color:"#fff",padding:"0.95rem",borderRadius:50,border:"none",fontFamily:"'DM Sans',sans-serif",fontSize:"1rem",fontWeight:700,cursor:"pointer",transition:"background 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#1e3a8a"}
                  onMouseLeave={e=>e.currentTarget.style.background="#0d0d1a"}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
