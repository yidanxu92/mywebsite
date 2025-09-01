'use client';
export default function Footer() {
    return (
    <footer className="py-8 border-t border-slate-200/60 dark:border-slate-800/60">
    <div className="container text-slate-500 dark:text-slate-400">
    © {new Date().getFullYear()} · Designed & coded with ♥ by Your Name
    </div>
    </footer>
    );
    }