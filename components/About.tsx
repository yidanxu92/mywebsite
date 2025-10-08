export default function About() {
    return (
      <section id="about" className="section-about">
        <div className="container grid md:grid-cols-[360px,1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="overline">about</div>
            <h2 className="h2-serif">Who Is Yidan?</h2>
  
            <div className="avatar-frame">
              <img
                className="avatar-img"
                src="/img/yidan.jpeg"
                alt="Yidan portrait"
              />
            </div>
          </div>
  
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
                I have a <strong>master's degree in Information Science</strong>, with a focus on <strong>Web Development</strong>.
                 I believe in “less is more”.
              </p>
  
              <p>
                I’m happiest when I’m creating, learning and exploring how to make things better.
              </p>
  
              <a className="about-cta" href="#contact">Get In Touch!</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  