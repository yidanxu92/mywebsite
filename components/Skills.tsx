
const items = [
    { t: "HTML5", k: "semantics · a11y" },
    { t: "CSS / SASS", k: "flex · grid · animation" },
    { t: "JavaScript", k: "fetch · async · modules" },
    { t: "React", k: "hooks · state · router" },
    { t: "Git / GitHub", k: "PRs · reviews" },
    { t: "APIs / Firebase", k: "CRUD · auth" },
    { t: "Accessibility", k: "WCAG · keyboard" },
    { t: "Responsive", k: "mobile‑first" },
    { t: "WordPress", k: "blocks · theming" },
    ];

    export default function Skills() {
        return (
        <section id="skills" className="section">
        <div className="container">
        <h2>skills & tools</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((it) => (
        <div key={it.t} className="card">
        <strong>{it.t}</strong>
        <div className="text-xs text-slate-500 dark:text-slate-400">{it.k}</div>
        </div>
        ))}
        </div>
        </div>
        </section>
        );
        }