export default function Hero() {
    return (
    <section id="home" className="section">
    <div className="container grid md:grid-cols-2 items-center gap-8">
    <div>
    <h1>
    Hello — I’m <span className="text-brand">Yidan</span>.<br />
    a Web Developer.
    </h1>
    <p className="lead mt-3">I bring the technical and visual sides of products together: UX, crisp pixels, and clean, accessible code.</p>
    <a className="btn mt-4" href="#contact">Get in touch</a>
    <div className="mt-3 flex flex-wrap gap-2">
    {[
    "fermented‑food enjoyer",
    "pluviophile",
    "world traveller",
    "cat servant",
    ].map((t) => (
    <span key={t} className="badge">{t}</span>
    ))}
    </div>
    </div>
    <div className="card">
    <img
src="https://images.unsplash.com/photo-1593096298921-b14f39368376?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Headshot placeholder"
className="w-40 h-40 rounded-img object-cover"
/>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-3">New Jersey · Open to opportunities</p>

</div>
</div>
</section>
);
}