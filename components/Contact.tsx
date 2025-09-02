export default function Contact() {
    return (
      <section id="contact" className="section-contact">
        <div className="container">
          <div className="contact-overline">contact</div>
          <h2 className="contact-h2">Get In Touch</h2>
  
          <form
          className="mt-4 grid md:grid-cols-[1fr,320px] gap-8 items-start"
          action="https://formspree.io/f/your-id" // ← 换成你的提交地址
          method="POST">
              <p className="contact-lead max-w-3xl md:col-span-2">
                Dropping a line to say g’day, ask for my resume or see if we can build
                something amazing together? I’d love to hear from you!
              </p>
              <p className="contact-lead mt-3 max-w-3xl md:col-span-2">
                Fill in your info in the form below and I look forward to hearing from you!
              </p>
  
              <label className="block">
                <span className="sr-only">Name</span>
                <input className="input-underline" type="text" name="name" placeholder="Name*" required />
              </label>
              <div className="hidden md:block" aria-hidden="true" />
              
  
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input className="input-underline" type="email" name="email" placeholder="Email*" required />
                </label>
                <div className="hidden md:block" aria-hidden="true" />
  
                <label className="block self-end">
                  <span className="sr-only">Message</span>
                  <textarea
                    className="input-underline min-h-[180px] resize-y"
                    name="message"
                    placeholder="Message*"
                    required
                  />
                </label>

                <div className="justify-self-center md:justify-self-end">
                    <img
                    src="/img/tiger_transparent.png"       
                    alt="tiger"
                    className="tiger-img pointer-events-none select-none"
                  />
                </div>

                <div className="md:col-span-2">
            <button type="submit" className="btn-mint mt-2">Send Email</button>
          </div>
        </form>
      </div>
    </section>
  );
}
 
             
  