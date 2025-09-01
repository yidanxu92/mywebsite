// components/Work.tsx
const projects = [
    {
      title: "Personal Date Night",
      desc: "For when you need a break from your partner but already got a babysitter. Now couples can go to different events in similar locations and at the same time. A group programming project.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      live: "#",
      repo: "#",
    },
    {
      title: "Newspaper Apparatus",
      desc: "Generate a playful steampunk-style custom newspaper.",
      img: "https://images.unsplash.com/photo-1529336953121-a9d95a888b84?q=80&w=1600&auto=format&fit=crop",
      live: "#",
      repo: "#",
    },
    {
      title: "Word Wiz",
      desc: "Race a wizard to think up related words. Pair programming.",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
      live: "#",
      repo: "#",
    },
  ];
  
  export default function Work() {
    return (
      <section id="work" className="section-work">
        <div className="container">
          <div className="work-overline">work</div>
          <h2 className="work-h2">A Selection Of Stuff I&apos;ve Built</h2>
  
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`work-row grid md:grid-cols-2 items-center gap-10 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* 左：文本（偶数行会被换到右边） */}
              <div>
                <a href={p.live} target="_blank" rel="noreferrer" className="work-title">
                  {p.title}
                </a>
                <p className="work-desc">{p.desc}</p>
  
                <div className="mt-6 flex gap-4 flex-wrap">
                  <a className="btn-mint" href={p.live} target="_blank" rel="noreferrer">
                    View It Here
                  </a>
                  <a className="btn-mint" href={p.repo} target="_blank" rel="noreferrer">
                    View Github Repo
                  </a>
                </div>
              </div>
  
              {/* 右：截图（偶数行会被换到左边） */}
              <div>
                <div className="device">
                  <img src={p.img} alt={`${p.title} screenshot`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  