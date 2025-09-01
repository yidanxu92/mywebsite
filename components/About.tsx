export default function About() {
    return (
      <section id="about" className="section-about">
        <div className="container grid md:grid-cols-[360px,1fr] gap-12 items-start">
          {/* 左列：ABOUT + 标题 + 头像 */}
          <div className="space-y-6">
            <div className="overline">about</div>
            <h2 className="h2-serif">Who Is Yidan?</h2>
  
            <div className="avatar-frame">
              <img
                className="avatar-img"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Yidan portrait"
              />
            </div>
          </div>
  
          {/* 右列：副标题 + 正文 + CTA */}
          <div>
            <h3 className="about-intro">
              A curiosity-driven Front-End Developer with design chops.
            </h3>
  
            <div className="about-body">
              <p>
                I’m passionate about bringing both the technical and visual aspects of digital
                products to life. User experience, beautiful pixels and writing clean, accessible,
                human code matter to me. I sweat the details.
              </p>
  
              <p>
                I have a <strong>BA in Multimedia Design</strong>, a <strong>Web Development Immersive</strong>,
                and an <strong>Advanced Scuba Diving License</strong>. I believe in “less is more”.
              </p>
  
              <p>
                I’m happiest when I’m creating, learning and exploring how to make things better.
                Currently solving deceptively simple problems. I’m not available for freelance work,
                but feel free to reach out and say hello!
              </p>
  
              <a className="about-cta" href="#contact">Get In Touch!</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  