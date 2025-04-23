import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Navigation highlight effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm z-10 border-b border-softblue/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-serif italic text-sm tracking-tight text-navy">ambrishified</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              {['home', 'services', 'work', 'toolbox', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className={`text-sm tracking-wide uppercase ${
                      activeSection === item ? 'text-richblue font-medium' : 'text-gray-500 hover:text-midblue'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-5xl">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-navy">
                Crafting stories that move, reel by reel.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                High-quality edits. Sharp storytelling. Clean aesthetics. Whether you're a creator, a brand, or a college club — your content deserves to hit different.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-navy text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-richblue transition-all duration-300"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section id="services" className="py-24 bg-skyblue/20">

          <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-6xl">
            <h2 className="text-3xl font-light mb-16 text-center text-navy">What I Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-softblue/20 transition-shadow duration-300">
                <div className="h-12 w-12 bg-skyblue/30 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-midblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-navy">Long-form Edits</h3>
                <p className="text-gray-600">
                  Built for YouTube, podcasts, and gaming content. Seamless cuts, stylish pacing, and retention-focused flow.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-softblue/20 transition-shadow duration-300">
                <div className="h-12 w-12 bg-skyblue/30 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-midblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-navy">Short-form Magic</h3>
                <p className="text-gray-600">
                  Minimal, fast-paced, and thumb-stopping. Perfect for Reels, Shorts, and TikToks.
                </p>
              </div>

              {/* Card 3 */}

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-softblue/20 transition-shadow duration-300">
                <div className="h-12 w-12 bg-skyblue/30 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-midblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-navy">Ads & Promos</h3>
                <p className="text-gray-600">
                  Snappy edits for brands and events. Script to screen delivery with intent and impact.
                </p>
              </div>
            </div>
          </div>


          
        </section>

        {/* Work Section */}
        <section id="work" className="py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-6xl">
            <h2 className="text-3xl font-light mb-16 text-center text-navy">Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <a
  href="https://www.youtube.com/@raidenplayz"
  target="_blank"
  rel="noopener noreferrer"
>
<div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition duration-300">
  <img
    src={`${process.env.PUBLIC_URL}/thumbnails/Gaming.jpg`}
    alt="Gaming Edits"
    className="w-full object-contain rounded-xl mb-4"
  />
  <h3 className="text-lg font-bold">Gaming Channel Edit</h3>
  <p className="text-sm text-gray-600">YouTube Channel: 5K+ Subscribers</p>
</div>

</a>

              {/* Project 2 */}
              <a
  href="https://www.instagram.com/reel/C89Vv6oyH1A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  target="_blank"
  rel="noopener noreferrer"
>
<div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition duration-300">
  <img
    src={`${process.env.PUBLIC_URL}/thumbnails/Cricket.jpg`}
    alt="Cricket Edits"
    className="w-full object-contain rounded-xl mb-4"
  />
  <h3 className="text-lg font-bold">Cricket Edits</h3>
  <p className="text-sm text-gray-600">Emotion & Story driven montages</p>
</div>

</a>


              {/* Project 3 */}
             
              <a
  href="https://www.instagram.com/reel/DEEYZk6yb5P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  target="_blank"
  rel="noopener noreferrer"
>
<div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition duration-300">
  <img
   src={`${process.env.PUBLIC_URL}/thumbnails/College.jpg`}
    alt="College Edits"
    className="w-full object-contain rounded-xl mb-4"
  />
  <h3 className="text-lg font-bold">College Reels</h3>
  <p className="text-sm text-gray-600">Minimal, sharp verticals for clubs and societies</p>
</div>

</a>
              {/* Project 4 */}
              <a
  href="https://www.instagram.com/reel/DHSs6eixSbk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  target="_blank"
  rel="noopener noreferrer"
>
<div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition duration-300">
  <img
    src={`${process.env.PUBLIC_URL}/thumbnails/Business.jpg`}
    alt="Brand Edits"
    className="w-full object-contain rounded-xl mb-4"
  />
  <h3 className="text-lg font-bold">Local Business Ads</h3>
  <p className="text-sm text-gray-600">Straightforward, polished promos</p>
</div>

</a>


           
            </div>
          </div>
        </section>
        <div className="text-center mt-8">
  <a
    href="https://www.instagram.com/reel/C-AEN_yS20N/?igsh=MXBjOWZyZ2xxeWJ0aA=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 text-lg leading-relaxed"
  >
    do check out my video editing guide ;)
  </a>
</div>

        

        {/* Toolbox Section */}
      <section id="toolbox" className="py-24 bg-skyblue/15">
  <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-4xl text-center">
    <h2 className="text-3xl font-light mb-12 text-navy">Toolbox</h2>
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-softblue/20">
      <div className="flex justify-center mb-8">
        <div className="h-16 w-16 bg-skyblue/30 rounded-full flex items-center justify-center">
          <img
             src={`${process.env.PUBLIC_URL}/thumbnails/DaVinci_Resolve_Studio.png`}
            alt="DaVinci Resolve Logo"
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        I edit on DaVinci Resolve — optimized for pro results. Expect clean cuts, cinematic color grading, smooth sound, and transitions that flow effortlessly.
      </p>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-4xl text-center">
            <h2 className="text-3xl font-light mb-6 text-navy">Let's Build Something Cool</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Need edits that actually <em>feel</em> something? Whether it's a quick reel, a full campaign, or something in between — let's make it happen.
            </p>
<form 
  action="https://formspree.io/f/mblojpbq"
  method="POST"
  className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-softblue/20 max-w-xl mx-auto"
>
  <div className="mb-6">
    <input 
      type="text" 
      name="name"
      placeholder="Name" 
      required
      className="w-full px-4 py-3 rounded-xl bg-skyblue/10 border border-softblue/20 focus:ring-2 focus:ring-mutedblue/40 focus:outline-none"
    />
  </div>
  <div className="mb-6">
    <input 
      type="email" 
      name="_replyto"
      placeholder="Email" 
      required
      className="w-full px-4 py-3 rounded-xl bg-skyblue/10 border border-softblue/20 focus:ring-2 focus:ring-mutedblue/40 focus:outline-none"
    />
  </div>
  <div className="mb-6">
    <textarea 
      name="message"
      placeholder="Tell me about your project" 
      rows="4" 
      required
      className="w-full px-4 py-3 rounded-xl bg-skyblue/10 border border-softblue/20 focus:ring-2 focus:ring-mutedblue/40 focus:outline-none"
    ></textarea>
  </div>
  <button 
    type="submit" 
    className="bg-navy text-white w-full px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-richblue transition-all duration-300"
  >
    Get in Touch
  </button>
</form>


          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-navy text-white">
          <div className="container mx-auto px-6 text-center text-sm">
            <p className="font-serif italic">ambrishified</p>
            <p className="mt-2 text-softblue">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}