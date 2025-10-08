// components/Nav.tsx
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '../lib/useScrollSpy';

const sections = ['home','about','skills','work','testimonials','contact'] as const;

export default function Nav() {
  const active = useScrollSpy(sections as unknown as string[]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const Item = ({ id, label }: { id: string; label: string }) => (
    <a
      href={`#${id}`}
      className={`nav-link ${active === id ? 'active' : ''}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'page' : undefined}
    >
      {label}
    </a>
  );

  return (
    <header className="header-brand sticky top-0 z-50 shadow">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
    
          <nav className="hidden md:flex items-center">
            <Item id="home" label="home" />
            <Item id="about" label="about" />
            <Item id="skills" label="skills & tools" />
            <Item id="work" label="work" />
            <Item id="contact" label="contact" />
          </nav>
        </div>
        <div className="flex items-center gap-2">
         
          
        </div>
      </div>

     
    </header>
  );
}

