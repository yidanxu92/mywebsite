const projects = [
    {
    title: "Personal Date Night",
    desc: "Couples go to different events at the same time & area. Group project.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    repo: "#",
    },
    {
    title: "Newspaper Apparatus",
    desc: "Generate a playful steampunk-style custom newspaper.",
    img: "https://images.unsplash.com/photo-1529336953121-a9d95a888b84?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    repo: "#",
    },
    {
    title: "Word Wiz",
    desc: "Race a wizard to think up related words. Pair programming.",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    repo: "#",
    },
    ];


    export default function Work() {
        return (
        <section id="work" className="section">
        <div className="container">
        <h2>work</h2>
        <p className="lead mb-6">A selection of things I’ve built.</p>
        <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p) => (
        <article key={p.title} className="card flex flex-col gap-3">
        <img src={p.img} alt="Project screenshot" className="w-full h-56 object-cover rounded-xl border border-slate-200/60 dark:border-slate-800/60" />
        <h3 className="font-bold text-lg">{p.title}</h3>
        <p>{p.desc}</p>
        <div className="flex gap-2 flex-wrap">
        <a className="btn" href={p.live} target="_blank">view it here</a>
        <a className="btn" href={p.repo} target="_blank">github repo</a>
        </div>
        </article>
        ))}
        </div>
        </div>
        </section>
        );
        }