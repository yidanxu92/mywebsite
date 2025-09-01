// components/Skills.tsx
type Skill = { t: string; k: string; icon?: string };

const items: Skill[] = [
  { t: 'HTML5',         k: 'semantics · a11y',          icon: '/icons/html5.svg' },
  { t: 'CSS3 / SASS',   k: 'flex · grid · animation',   icon: '/icons/css3.svg'  },
  { t: 'JavaScript',    k: 'fetch · async · modules',   icon: '/icons/js.svg'    },
  { t: 'React',         k: 'hooks · state · router',    icon: '/icons/react.svg' },
  { t: 'Git',           k: '',                          icon: '/icons/git.svg'   },
  { t: 'Github',        k: '',                          icon: '/icons/github.svg'},
  { t: 'RESTful APIs',  k: '',                          icon: '/icons/api.svg'   },
  { t: 'Command Line',  k: '',                          icon: '/icons/terminal.svg'},
  { t: 'VS Code',       k: '',                          icon: '/icons/vscode.svg'},
  { t: 'Responsive Websites', k: '',                    icon: '/icons/responsive.svg'},
  { t: 'Web Accessibility',   k: '',                    icon: '/icons/a11y.svg'  },
  { t: 'WordPress',     k: '',                          icon: '/icons/wordpress.svg'},
];

/* 兜底缩写（没有 icon 时才用） */
function abbrev(label: string) {
  if (label.startsWith('JavaScript')) return 'JS';
  if (label.startsWith('React'))      return '⚛︎';
  if (label.includes('GitHub'))       return 'GH';
  if (label.includes('Git '))         return 'Git';
  if (label.includes('API'))          return 'API';
  if (label.toLowerCase().includes('access')) return 'A11Y';
  if (label.toLowerCase().includes('responsive')) return 'RWD';
  if (label.toLowerCase().includes('wordpress')) return 'WP';
  if (label.toLowerCase().includes('css')) return 'CSS';
  return label.replace(/[^A-Z0-9]/g,'').slice(0,4) || '•';
}

export default function Skills() {
  return (
    <section id="skills" className="section-skills">
      <div className="container">
        <div className="overline">skills & tools</div>
        <h2 className="h2-serif">My Toolbox &amp; Things I Can Do</h2>
        <p className="skills-lead">
          The skills, tools and technologies I use to bring your products to life:
        </p>

        <div className="skill-grid">
          {items.map((it) => (
            <div key={it.t} className="skill-item">
              <div className="skill-glyph">
                {it.icon ? (
                  <img src={it.icon} alt={it.t} className="skill-icon-img" />
                ) : (
                  <span className="skill-letter">{abbrev(it.t)}</span>
                )}
              </div>
              <div className="skill-name">{it.t}</div>
              {it.k && <div className="text-sm skill-meta">{it.k}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
