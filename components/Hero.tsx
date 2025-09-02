// components/Hero.tsx
export default function Hero() {
    return (
      <section id="home" className="section-hero">
        <div className="container grid md:grid-cols-2 items-center gap-8">
          <div>
          <h1 className="hero-title text-white">
  Hello — I’m <span className="underline decoration-white/60">Yidan</span>.<br />
  I’m a <span className="hero-strong">Web Developer</span><br />
  and{" "}

  <span className="rotator">
    <span aria-hidden className="rotator__measure">fermented-food enjoyer</span>
    <span className="rotator__inner rotator--4">
      <span>Coffee dependent☕️</span>
      <span>ice-cream sommelier🍦</span>
      <span>nature lover🌳</span>
      <span>cat servant🐱</span>
      <span aria-hidden>coffee dependent☕️</span> 
    </span>
  </span>
 
</h1>

  
            <p className="lead mt-6 text-white/90 max-w-2xl">
              I bring the technical and visual sides of products together: UX, crisp pixels, and clean, accessible code.
            </p>
          </div>
  
          {/* keep right side empty like the reference (illustration is via CSS ::before) */}
          <div />
        </div>
      </section>
    );
  }
  