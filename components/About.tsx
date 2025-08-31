export default function About() {
    return (
    <section id="about" className="section">
    <div className="container grid md:grid-cols-2 gap-8 items-start">
    <div>
    <h2>about</h2>
    <p className="lead">A curiosity‑driven Front‑End Developer with design chops. I care about UX, details and accessibility. Less is more.</p>
    <p className="mt-3">Background: Master in Information Science · Web Dev Immersive · </p>
    <a className="btn mt-4" href="#contact">Say hello</a>
    </div>
    <div className="card">
    <h3 className="font-bold text-lg">Currently</h3>
    <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>Building deceptively simple web apps</li>
    <li>Improving JavaScript / React depth</li>
    <li>#100DaysOfCode — CSS animations</li>
    </ul>
    </div>
    </div>
    </section>
    );
    }