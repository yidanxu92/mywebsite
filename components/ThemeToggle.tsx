"use client";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
const [mounted, setMounted] = useState(false);
const [theme, setTheme] = useState<"light" | "dark">("light");


useEffect(() => {
setMounted(true);
const saved = (localStorage.getItem("theme") as "light" | "dark") ||
(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(saved);
document.documentElement.classList.toggle("dark", saved === "dark");
}, []);


if (!mounted) return null;

return (
    <button
    aria-label="Toggle theme"
    className="btn"
    onClick={() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    }}
    >
    {theme === "dark" ? "🌙" : "☀️"}
    <span className="sr-only">Toggle theme</span>
    </button>
    );
    }
