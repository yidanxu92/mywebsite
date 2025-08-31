"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useScrollSpy } from "../lib/useScrollSpy";


const sections = ["home", "about", "skills", "work", "testimonials", "contact"] as const;


export default function Nav() {
const active = useScrollSpy(sections as unknown as string[]);
const [open, setOpen] = useState(false);


useEffect(() => {
const close = () => setOpen(false);
window.addEventListener("resize", close);
return () => window.removeEventListener("resize", close);
}, []);


const Item = ({ id, label }: { id: string; label: string }) => (
<a
href={`#${id}`}
className={`px-3 py-2 rounded-xl font-semibold hover:text-brand ${
active === id ? "text-brand" : "text-slate-900 dark:text-slate-100"
}`}
onClick={() => setOpen(false)}
></a>
);
return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
    <div className="container flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
    <span className="badge">yidanxu.dev</span>
    <nav className="hidden md:flex items-center">
    <Item id="home" label="home" />
    <Item id="about" label="about" />
    <Item id="skills" label="skills & tools" />
    <Item id="work" label="work" />
    <Item id="testimonials" label="testimonials" />
    <Item id="contact" label="contact" />
    <Link className="px-3 py-2 rounded-xl font-semibold text-slate-600 dark:text-slate-300" href="https://your-blog.example" target="_blank">blog ↗</Link>
    <Link className="px-3 py-2 rounded-xl font-semibold text-slate-600 dark:text-slate-300" href="https://updates.example" target="_blank">updates ↗</Link>
    </nav>
    </div>
    <div className="flex items-center gap-2">
<ThemeToggle />
<button
className="btn md:hidden"
aria-expanded={open}
aria-controls="mobileMenu"
onClick={() => setOpen(!open)}
>
☰
<span className="sr-only">Open menu</span>
</button>
</div>
</div>
<div id="mobileMenu" className={`${open ? "block" : "hidden"} md:hidden border-t border-slate-200/60 dark:border-slate-800/60`}>
<div className="container py-2 grid gap-1">
{sections.map((id) => (
<a key={id} href={`#${id}`} className="px-2 py-2 rounded-lg font-semibold" onClick={() => setOpen(false)}>{id}</a>
))}
<Link href="https://your-blog.example" target="_blank" className="px-2 py-2 rounded-lg font-semibold">blog ↗</Link>
<Link href="https://updates.example" target="_blank" className="px-2 py-2 rounded-lg font-semibold">updates ↗</Link>
</div>
</div>
</header>
);
}