"use client";
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

 
  useEffect(() => {
    const count = localStorage.getItem('formSubmitCount') || '0';
    const lastReset = localStorage.getItem('lastResetDate') || '0';
    const now = new Date().getTime();
    
  
    if (now - parseInt(lastReset) > 30 * 24 * 60 * 60 * 1000) {
      localStorage.setItem('formSubmitCount', '0');
      localStorage.setItem('lastResetDate', now.toString());
      setSubmitCount(0);
    } else {
      setSubmitCount(parseInt(count));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 检查是否被封锁
    if (isBlocked || submitCount >= 100) {
      alert('表单提交次数已达上限，请下月再试。');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/xqaddgvw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const newCount = submitCount + 1;
        setSubmitCount(newCount);
        localStorage.setItem('formSubmitCount', newCount.toString());
        
        if (newCount >= 100) {
          setIsBlocked(true);
        }
        
        alert('message sent! I will get back to you soon.');
        e.currentTarget.reset();
      } else {
        throw new Error('failed to submit');
      }
    } catch (error) {
      alert('failed to submit.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <h2 className="contact-h2">Get In Touch</h2>

        {isBlocked ? (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">
              ⚠️ 表单提交次数已达本月上限（100次），请下月再试。
            </p>
          </div>
        ) : (
          <form
            className="mt-4 grid md:grid-cols-[1fr,320px] gap-8 items-start"
            onSubmit={handleSubmit}
          >
              <p className="contact-lead max-w-3xl md:col-span-2">
                Dropping a line to say hello, ask for my resume or see if we can build
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
                  <button 
                    type="submit" 
                    className="btn-mint mt-2" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '发送中...' : 'Send Email'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      );
    }
 
             
  