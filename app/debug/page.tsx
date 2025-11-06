export default function DebugPage() {
  if (typeof window !== "undefined") {
    const s = getComputedStyle(document.documentElement);
    console.log("VAR __ink", s.getPropertyValue("--ink"));
    console.log("VAR __celeste", s.getPropertyValue("--celeste"));
    console.log("VAR __bg", s.getPropertyValue("--bg"));
  }
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>DEBUG CSS VARS</h1>
      <ul style={{ lineHeight: 1.8 }}>
        <li><code>--ink</code> <span style={{ background: "var(--ink)", color:"#fff", padding:"2px 6px", borderRadius:4 }}>sample</span></li>
        <li><code>--celeste</code> <span style={{ background: "var(--celeste)", padding:"2px 6px", borderRadius:4 }}>sample</span></li>
        <li><code>--bg</code> <span style={{ background: "var(--bg)", padding:"2px 6px", borderRadius:4, border:"1px solid #ddd" }}>sample</span></li>
      </ul>
      <p style={{ marginTop: 16 }}>
        Si estas “muestras” no cambian de color, <b>globals.css no está aplicando</b>.
      </p>
    </main>
  );
}
