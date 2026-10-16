import { useState, type FormEvent } from "react";
import "@/big-type.css";

const CONTACT_URL = "https://mejesi.com/api/hovina-contact";

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.error || "Something went wrong.");
      form.reset();
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="b-form b-form-done" role="status">
        <p className="b-d" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>Message sent.</p>
        <p>Thank you. We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="b-form" onSubmit={submit}>
      <label>Your name<input name="name" required maxLength={120} autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength={120} autoComplete="email" /></label>
      <label className="wide">WhatsApp number (optional)<input name="whatsapp" maxLength={40} autoComplete="tel" placeholder="+263 77 000 0000" /></label>
      <label className="wide">What do you want to build?<textarea name="message" required rows={5} maxLength={4000} /></label>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      {state === "error" && <p className="b-form-err wide" role="alert">{error} You can also email dev@hovina.co.zw.</p>}
      <button className="b-pill lime wide" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="b-page">
    <div className="b" id="top">
      <div className="b-wrap">
        <header className="b-nav">
          <a className="b-logo" href="#top" aria-label="Hovina home">Hovina<i>.</i></a>
          <nav className="b-links" aria-label="Main">
            <a className="hide-s" href="#services">Services</a>
            <a className="hide-s" href="#work">Work</a>
            <a className="hide-s" href="#process">Process</a>
            <a className="b-pill" href="#contact">Let's talk</a>
          </nav>
        </header>
    
        <section className="b-hero">
          <p className="b-m" style={{ margin: '0 0 22px' }}>Software studio · Harare, Zimbabwe</p>
          <h1 className="b-d b-h1">We build<br />things that<br /><span className="hl">ship.</span></h1>
          <div className="b-sub">
            <p className="b-lede">Websites, WhatsApp bots, AI agents and custom software. Built end to end by one team, then kept running after launch.</p>
            <div className="b-cta">
              <a className="b-pill lime" href="#contact">Start a project <span aria-hidden="true">→</span></a>
              <a className="b-pill line" href="#work">See what we've shipped</a>
            </div>
          </div>
        </section>
      </div>
    
      <div className="b-marq" aria-hidden="true"><div className="b-marq-t">
        <span>Web platforms</span><em>●</em><span>WhatsApp bots</span><em>●</em><span>AI agents</span><em>●</em><span>Machine learning</span><em>●</em><span>Custom software</span><em>●</em><span>System integration</span><em>●</em>
        <span>Web platforms</span><em>●</em><span>WhatsApp bots</span><em>●</em><span>AI agents</span><em>●</em><span>Machine learning</span><em>●</em><span>Custom software</span><em>●</em><span>System integration</span><em>●</em>
      </div></div>
    
      <div className="b-wrap">
        <section className="b-sec" id="services">
          <div className="b-sec-h"><h2 className="b-d">What we make</h2><span className="b-m">06 services</span></div>
          <div className="b-rows">
            <a className="b-row" href="#contact"><span className="n">01</span><h3>Web platforms</h3><p>Fast, secure sites and web apps that run your business, from first page to full dashboard.</p><span className="ar" aria-hidden="true">↗</span></a>
            <a className="b-row" href="#contact"><span className="n">02</span><h3>WhatsApp bots</h3><p>Your customers already live on WhatsApp. Let them order, book, vote and ask there.</p><span className="ar" aria-hidden="true">↗</span></a>
            <a className="b-row" href="#contact"><span className="n">03</span><h3>AI agents</h3><p>Assistants that answer, route and do the repetitive work, with a person in the loop where it matters.</p><span className="ar" aria-hidden="true">↗</span></a>
            <a className="b-row" href="#contact"><span className="n">04</span><h3>Machine learning</h3><p>Models trained on your data to predict, classify and recommend.</p><span className="ar" aria-hidden="true">↗</span></a>
            <a className="b-row" href="#contact"><span className="n">05</span><h3>Custom software</h3><p>Built around how you really work, not squeezed into someone else's template.</p><span className="ar" aria-hidden="true">↗</span></a>
            <a className="b-row" href="#contact"><span className="n">06</span><h3>System integration</h3><p>Connect the tools you already pay for so data moves on its own.</p><span className="ar" aria-hidden="true">↗</span></a>
          </div>
        </section>
    
        <section className="b-sec" id="work">
          <div className="b-sec-h"><h2 className="b-d">Our own<br />products</h2><span className="b-m">Live today · used by real people</span></div>
          <div className="b-work">
            <article className="b-card k">
              <div>
                <span className="b-m b-chip">WhatsApp</span>
                <h3>Mejesi</h3>
                <p>Run surveys, polls and Q&amp;A inside WhatsApp. Plus job alerts, study packs and RSVPs.</p>
                <p style={{ marginTop: '22px' }}><a className="b-pill lime" href="https://wa.me/263776757578">Open on WhatsApp <span aria-hidden="true">↗</span></a></p>
              </div>
              <div className="b-mock wa" aria-hidden="true">
                <p className="b-bub in">Poll: where should the team lunch be?</p>
                <p className="b-bub out">Option 2</p>
                <p className="b-bub in">Thanks, your vote is in.</p>
              </div>
            </article>
            <article className="b-card l">
              <div>
                <span className="b-m b-chip">Web app</span>
                <h3>Hovina Collab</h3>
                <p>Shared sheets for the things groups plan together: wedding budgets, events, roora ledgers, group trips.</p>
                <p style={{ marginTop: '22px' }}><a className="b-pill" href="https://collab.hovina.co.zw">Open Collab <span aria-hidden="true">↗</span></a></p>
              </div>
              <div className="b-mock sh" aria-hidden="true">
                <div className="b-sh"><span className="hd">Item</span><span className="hd">Paid</span><span className="hd">Due</span>
                  <span>Venue</span><span>—</span><span>—</span>
                  <span>Catering</span><span>—</span><span>—</span>
                  <span className="tot">Total</span><span className="tot">—</span><span className="tot">—</span></div>
              </div>
            </article>
          </div>
          <div className="b-ph"><div><span className="b-m">Case study · coming</span><br /><b>[Client name: pending approval]</b></div><span className="b-m">Reserved for the next project we can show</span></div>
        </section>
    
        <section className="b-sec" id="process">
          <div className="b-sec-h"><h2 className="b-d">How it goes</h2><span className="b-m">4 steps · no surprises</span></div>
          <div className="b-proc">
            <div className="b-step"><div className="big">1</div><h3>Discovery &amp; Blueprint</h3><p>We learn how you work and agree exactly what gets built.</p></div>
            <div className="b-step"><div className="big">2</div><h3>Engineering</h3><p>We build it in the open, so you see progress every step.</p></div>
            <div className="b-step"><div className="big">3</div><h3>Deployment</h3><p>We launch it, test it live and hand it over.</p></div>
            <div className="b-step"><div className="big">4</div><h3>Evolution</h3><p>We keep it running and improve it as you grow.</p></div>
          </div>
        </section>
      </div>
    
      <div className="b-band"><div className="b-wrap"><p className="b-d">No fluff.<br />No empty metrics.<br />Products that actually work.</p></div></div>
    
      <section className="b-cta2" id="contact">
        <div className="b-wrap">
          <p className="b-m" style={{ margin: '0', color: 'var(--lime)' }}>Got something to build?</p>
          <a className="b-mail" href="mailto:dev@hovina.co.zw">dev@hovina.co.zw</a>
          <ContactForm />
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: '32px' }}>
            <a className="b-pill lime" href="https://wa.me/263776757578">WhatsApp +263 77 675 7578</a>
            <span style={{ color: '#a6a69e' }}>We will get back to you within 24 hours.</span>
          </div>
          <footer className="b-foot">
            <span>© 2026 Hovina</span>
            <nav aria-label="Legal"><a href="https://hovina.co.zw/privacy">Privacy Policy</a><a href="https://hovina.co.zw/terms">Terms of Service</a><a href="https://hovina.co.zw/data-deletion">Data Deletion</a></nav>
          </footer>
        </div>
      </section>
    </div>    </div>
  );
}
