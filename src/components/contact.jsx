import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({
  title = "Let's Create Something Remarkable",
  description = "If you're looking to build a refined digital experience with performance, clarity, and precision — let's talk.",
  email = "azfarmoin.mernstack@gmail.com",
  location = "Pakistan, Karachi",
  availability = "Open for select collaborations",
}) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_ty18cy8", "template_swmsjop", form.current, "JJ7lIgykXQxARqHBX")
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("Email send failed:", error.text);
          setStatus("error");
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Section shell ── */
        .ct-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 100px;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(160deg, #020c1b 0%, #011628 40%, #002147 75%, #003366 100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
        }
        @media (min-width: 640px)  { .ct-section { padding: 90px 40px 110px; } }
        @media (min-width: 1024px) { .ct-section { padding: 110px 64px 120px; } }

        /* ── Noise texture ── */
        .ct-noise {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        /* ── Grid lines ── */
        .ct-grid-lines {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 1; opacity: 0.035;
          background-image:
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── Ambient glow blobs ── */
        .ct-blob-tl {
          position: absolute; top: -8%; left: -6%;
          width: 45vw; height: 45vw;
          max-width: 520px; max-height: 520px;
          border-radius: 50%; pointer-events: none; z-index: 1;
          background: radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%);
        }
        .ct-blob-br {
          position: absolute; bottom: -10%; right: -4%;
          width: 50vw; height: 50vw;
          max-width: 560px; max-height: 560px;
          border-radius: 50%; pointer-events: none; z-index: 1;
          background: radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%);
        }

        /* ── Floating geometry ── */
        .ct-float-circle {
          position: absolute; top: 14%; right: 8%;
          width: 80px; height: 80px;
          border: 1px solid rgba(45,212,191,0.15);
          border-radius: 50%;
          pointer-events: none; z-index: 2;
          animation: ctFloatA 7s ease-in-out infinite;
        }
        .ct-float-square {
          position: absolute; bottom: 14%; left: 4%;
          width: 48px; height: 48px;
          border: 1px solid rgba(6,182,212,0.15);
          transform: rotate(45deg);
          pointer-events: none; z-index: 2;
          animation: ctFloatB 9s ease-in-out infinite;
        }
        .ct-float-line {
          position: absolute; top: 32%; right: 3%;
          width: 3px; height: 90px;
          background: linear-gradient(to bottom, #2dd4bf, transparent);
          pointer-events: none; z-index: 2; opacity: 0.18;
          animation: ctFloatA 7s ease-in-out infinite;
        }
        @keyframes ctFloatA {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes ctFloatB {
          0%, 100% { transform: rotate(45deg) translateY(0); }
          50%       { transform: rotate(45deg) translateY(-12px); }
        }

        /* ── Content wrapper ── */
        .ct-wrap {
          position: relative; z-index: 10;
          width: 100%; max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Section header ── */
        .ct-header {
          text-align: center;
          margin-bottom: 56px;
        }
        @media (min-width: 1024px) { .ct-header { margin-bottom: 72px; } }

        .ct-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(45,212,191,0.12), rgba(6,182,212,0.08));
          border: 1px solid rgba(45,212,191,0.28);
          color: #2dd4bf;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 100px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .ct-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(2.2rem, 6vw, 4.2rem);
          line-height: 1.08;
          margin: 0 0 14px;
          word-break: break-word;
          background: linear-gradient(135deg, #ffffff 30%, #2dd4bf 65%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ct-divider {
          width: 72px; height: 2px;
          background: linear-gradient(90deg, #2dd4bf, #06b6d4, transparent);
          margin: 0 auto 18px;
          border-radius: 100px;
        }

        .ct-desc {
          font-size: clamp(0.92rem, 1.6vw, 1.05rem);
          color: rgba(186,230,253,0.7);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── Main grid ── */
        .ct-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .ct-main-grid {
            grid-template-columns: 1fr 1.4fr;
            gap: 64px;
            align-items: start;
          }
        }

        /* ── Info card ── */
        .ct-info-card {
          background: rgba(1,22,40,0.6);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px;
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (min-width: 640px) { .ct-info-card { padding: 40px 36px; } }

        .ct-info-label {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(45,212,191,0.7);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .ct-info-value {
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          color: rgba(186,230,253,0.85);
          line-height: 1.5;
          word-break: break-all;
        }

        .ct-info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ct-info-row:last-child { border-bottom: none; padding-bottom: 0; }

        .ct-info-icon {
          flex-shrink: 0;
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(45,212,191,0.15), rgba(6,182,212,0.08));
          border: 1px solid rgba(45,212,191,0.2);
          color: #2dd4bf;
          font-size: 16px;
          margin-top: 2px;
        }

        .ct-status-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
          margin-right: 8px;
          animation: pulse 2s ease-in-out infinite;
          vertical-align: middle;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
          50%       { opacity: 0.8; box-shadow: 0 0 0 5px rgba(74,222,128,0); }
        }

        /* ── Form card ── */
        .ct-form-card {
          background: rgba(1,22,40,0.6);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px;
          backdrop-filter: blur(12px);
        }
        @media (min-width: 640px) { .ct-form-card { padding: 40px 36px; } }

        .ct-form { display: flex; flex-direction: column; gap: 28px; }

        .ct-field-group {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 560px) {
          .ct-field-group { grid-template-columns: 1fr 1fr; gap: 24px; }
        }

        .ct-field {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ct-field-label {
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          color: rgba(45,212,191,0.7);
        }

        .ct-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14px;
          color: white;
          outline: none;
          caret-color: #2dd4bf;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .ct-input::placeholder { color: rgba(148,210,252,0.3); }
        .ct-input:focus {
          border-color: rgba(45,212,191,0.55);
          background: rgba(45,212,191,0.04);
          box-shadow: 0 0 0 3px rgba(45,212,191,0.08);
        }

        .ct-textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14px;
          color: white;
          outline: none;
          caret-color: #2dd4bf;
          resize: none;
          min-height: 130px;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          display: block;
        }
        @media (min-width: 640px) { .ct-textarea { min-height: 150px; } }
        .ct-textarea::placeholder { color: rgba(148,210,252,0.3); }
        .ct-textarea:focus {
          border-color: rgba(45,212,191,0.55);
          background: rgba(45,212,191,0.04);
          box-shadow: 0 0 0 3px rgba(45,212,191,0.08);
        }

        /* ── Submit button ── */
        .ct-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 36px;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          border-radius: 9999px;
          overflow: hidden;
          cursor: pointer;
          color: #011628;
          background: linear-gradient(135deg, #2dd4bf 0%, #06b6d4 60%, #38bdf8 100%);
          box-shadow: 0 8px 28px rgba(45,212,191,0.3);
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          -webkit-appearance: none;
          touch-action: manipulation;
        }
        @media (min-width: 480px) { .ct-btn { width: auto; } }
        .ct-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transition: left 0.5s ease;
        }
        .ct-btn:not(:disabled):hover::before { left: 100%; }
        .ct-btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,212,191,0.45);
        }
        .ct-btn:not(:disabled):active { transform: scale(0.97); }
        .ct-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* ── Alerts ── */
        .ct-alert {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 500;
          border-radius: 12px; padding: 12px 18px;
          animation: ctFadeUp 0.3s ease;
        }
        .ct-alert-ok {
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
        }
        .ct-alert-err {
          color: #f87171;
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.2);
        }
        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Bottom ticker ── */
        .ct-ticker-wrap {
          position: absolute; bottom: 0; left: 0; right: 0;
          z-index: 10; overflow: hidden;
          border-top: 1px solid rgba(45,212,191,0.1);
          background: rgba(1,22,40,0.6);
          backdrop-filter: blur(8px);
          padding: 10px 0;
        }
        .ct-ticker-track {
          display: flex;
          gap: 3rem;
          animation: ctTicker 22s linear infinite;
          white-space: nowrap;
        }
        @keyframes ctTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section className="ct-section">
        {/* ── Texture & grid ── */}
        <div className="ct-noise" />
        <div className="ct-grid-lines" />

        {/* ── Ambient blobs ── */}
        <div className="ct-blob-tl" />
        <div className="ct-blob-br" />

        {/* ── Floating geometry ── */}
        <div className="ct-float-circle" />
        <div className="ct-float-square" />
        <div className="ct-float-line" />

        {/* ── Corner brackets (decorative) ── */}
        <div style={{
          position: "absolute", top: 24, left: 24,
          width: 52, height: 52,
          borderTop: "2px solid rgba(45,212,191,0.35)",
          borderLeft: "2px solid rgba(45,212,191,0.35)",
          borderRadius: "8px 0 0 0",
          pointerEvents: "none", zIndex: 2,
        }} />
        <div style={{
          position: "absolute", bottom: 56, right: 24,
          width: 52, height: 52,
          borderBottom: "2px solid rgba(6,182,212,0.35)",
          borderRight: "2px solid rgba(6,182,212,0.35)",
          borderRadius: "0 0 8px 0",
          pointerEvents: "none", zIndex: 2,
        }} />

        {/* ── Main content ── */}
        <div className="ct-wrap">

          {/* ── Header ── */}
          <div className="ct-header">
            <div className="ct-badge">Get In Touch · Let's Collaborate</div>
            <h2 className="ct-title">{title}</h2>
            <div className="ct-divider" />
            <p className="ct-desc">{description}</p>
          </div>

          {/* ── Info + Form ── */}
          <div className="ct-main-grid">

            {/* ─── LEFT: Info card ─── */}
            <div className="ct-info-card">

              <div className="ct-info-row">
                <div className="ct-info-icon">✉</div>
                <div>
                  <p className="ct-info-label">Email</p>
                  <p className="ct-info-value" style={{ wordBreak: "break-all" }}>{email}</p>
                </div>
              </div>

              <div className="ct-info-row">
                <div className="ct-info-icon">📍</div>
                <div>
                  <p className="ct-info-label">Location</p>
                  <p className="ct-info-value">{location}</p>
                </div>
              </div>

              <div className="ct-info-row">
                <div className="ct-info-icon" style={{ fontSize: 10 }}>●</div>
                <div>
                  <p className="ct-info-label">Status</p>
                  <p className="ct-info-value">
                    <span className="ct-status-dot" />
                    {availability}
                  </p>
                </div>
              </div>

              {/* Social row */}
              <div style={{ paddingTop: 4 }}>
                <p className="ct-info-label" style={{ marginBottom: 14 }}>Connect</p>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    {
                      label: "GitHub", href: "https://github.com/Azfarmoin",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-azfar-moin-49240a39b",
                      icon: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Email", href: `mailto:${email}`,
                      icon: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      ),
                    },
                  ].map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      style={{
                        width: 40, height: 40,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(186,230,253,0.6)",
                        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#2dd4bf";
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)";
                        e.currentTarget.style.background = "rgba(45,212,191,0.08)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(186,230,253,0.6)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Form card ─── */}
            <div className="ct-form-card">
              <form ref={form} onSubmit={sendEmail} className="ct-form">

                {/* Name + Email row */}
                <div className="ct-field-group">
                  <div className="ct-field">
                    <label className="ct-field-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      autoComplete="name"
                      className="ct-input"
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-field-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                      className="ct-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="ct-field">
                  <label className="ct-field-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    className="ct-input"
                  />
                </div>

                {/* Message */}
                <div className="ct-field">
                  <label className="ct-field-label">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    className="ct-textarea"
                  />
                </div>

                {/* Submit + alert */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <button type="submit" disabled={loading} className="ct-btn">
                    {loading ? (
                      <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                          style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Inquiry
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="ct-alert ct-alert-ok">
                      <span>✓</span>
                      <span>Message sent! I'll get back to you soon.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="ct-alert ct-alert-err">
                      <span>✕</span>
                      <span>Failed to send. Please try again.</span>
                    </div>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* ── Bottom ticker (same as HeroSection) ── */}
        <div className="ct-ticker-wrap">
          <div className="ct-ticker-track">
            {[
              "React", "·", "Node.js", "·", "MongoDB", "·", "Tailwind CSS", "·",
              "GSAP", "·", "REST APIs", "·", "Express.js", "·", "Full-Stack Dev", "·",
              "React", "·", "Node.js", "·", "MongoDB", "·", "Tailwind CSS", "·",
              "GSAP", "·", "REST APIs", "·", "Express.js", "·", "Full-Stack Dev", "·",
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: item === "·" ? "rgba(45,212,191,0.4)" : "rgba(148,210,252,0.45)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

      </section>
    </>
  );
};

export default Contact;
