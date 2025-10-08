// components/Work.tsx
const projects = [
    {
      title: "The Cat Connection",
      desc: "Find your purr‑fect match — one quiz, one cat, one forever home.",
      img: "/img/catpaw3.jpg",
      live: "https://cat-adoption-pi.vercel.app/",
      repo: "#",
    },
    {
      title: "ScoopDrop",
      desc: "A full-stack scoop shop: artisanal ice cream delivered to your door.",
      img: "/img/ice_cream1.jpg",
      live: "https://foodapp-website-iota.vercel.app/",
      repo: "#",
    },
    
  ];
  
  export default function Work() {
    return (
      <section id="work" className="section-work">
        <div className="container">
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
  