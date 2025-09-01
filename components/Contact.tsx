'use client';
export default function Contact() {
    return (
    <section id="contact" className="section">
    <div className="container grid md:grid-cols-2 gap-8">
    <div>
    <h2>get in touch</h2>
    <p>Dropping a line to say hi, ask for my resume, or build something together?</p>
    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Or find me on Twitter · GitHub · CodePen · Instagram</p>
    </div>
    <form
    className="card grid gap-3"
    onSubmit={(e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value;
    window.location.href = `mailto:you@example.com?subject=Hello from ${encodeURIComponent(
    name
    )}&body=${encodeURIComponent(`${msg}\n\nFrom: ${name} <${email}>`)}`;
    }}
    >
    <label className="font-semibold" htmlFor="name">Name*</label>
    <input className="btn !justify-start" id="name" name="name" required />
    <label className="font-semibold" htmlFor="email">Email*
    </label>
    <input className="btn !justify-start" id="email" name="email" type="email" required />
<label className="font-semibold" htmlFor="msg">Message*</label>
<textarea className="btn !justify-start h-32" id="msg" name="msg" required />
<button className="btn mt-2" type="submit">Send email</button>
</form>
</div>
</section>
);
}