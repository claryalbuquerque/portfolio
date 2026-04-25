window.addEventListener("load", () => { document.body.style.opacity = "1"; });
document.querySelectorAll("nav a").forEach(l => { if (l.href === window.location.href) { l.style.fontWeight = "bold"; } });
const f = document.querySelector("form");
if (f) { f.addEventListener("submit", e => { e.preventDefault(); alert("Mensagem enviada 💖"); f.reset(); }); }
