import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Link as LinkIcon, Code, Send, Terminal, Sparkles } from 'lucide-react';

export default function AboutContact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
    >
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container editorial-shadow">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugxI0KU9eFDfG4rU-mvAbEHLMiiCmJUF9JKcsHyVA9gmEyU9cf5gSKT2aV_BqvFW-3Jk3MQUs7LW9C8y1y28b1bGCqA-NQYBDdVQDgoi71ak0jUskDI0lzAkS08uM1bkCd9Jphes8OFSt0YwOQQd3gAkGzZM-IokFpKRbBnGfoMLpBBMiau_JBT7Tanh6N90SLsyTmQok6Rp-jxkG7g0tX-WCLnKnED9eVE9KUw8X62OytGGOPMSFWabK2HhM9KEycYNf8nHNRAFB8" 
              alt="Vincent Shin Portrait"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 p-8 bg-surface-container-lowest rounded-xl editorial-shadow hidden md:block max-w-[280px]">
            <p className="font-label text-xs uppercase tracking-widest text-primary mb-2">Education</p>
            <p className="text-sm font-medium leading-relaxed text-on-surface-variant italic">
              Fanshawe College: Internet Applications and Web Development Diploma (GPA 4.0/4.2)
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 pt-4">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6 block">About Vincent Shin</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8 leading-[1.1]">
            Optimizing <span className="text-primary/40 italic">performance</span> through clean code.
          </h1>
          
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            <p>
              I am a Software Developer with over 6 years of experience specializing in Java and system performance. I focus on building robust, scalable architectures that deliver seamless user experiences while maintaining high technical standards.
            </p>
            <p>
              My professional journey is defined by a commitment to <strong>technical excellence</strong>—leveraging deep expertise in fullstack development to solve complex backend challenges and create intuitive frontend interfaces.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" /> Core Expertise
              </h3>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                {['Fullstack Development', 'Database Optimization (JPA, SQL)', 'System Performance (VisualVM)', 'System Security'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'React', 'Spring Boot', 'Strapi', 'JavaFX', 'Angular2'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-surface-container-low rounded-lg font-label text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[2rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 editorial-gradient opacity-10 blur-[100px] -mr-48 -mt-48 rounded-full" />
        
        <div className="relative z-10">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6 block">Contact</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-8">
            Let's connect.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
            I'm open to discussing new opportunities, technical collaborations, or system architecture inquiries. Reach out to start a conversation.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">Email</p>
                <a href="mailto:kingkingpo@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">kingkingpo@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">Phone</p>
                <p className="text-lg font-bold">514-402-8724</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                <MapPin className="w-6 h-6 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">Location</p>
                <p className="text-lg font-bold">Toronto, Canada (M2M 0A8)</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">Socials</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary hover:text-white transition-all duration-300">
                <LinkIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary hover:text-white transition-all duration-300">
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[1.5rem] shadow-[0_20px_40px_rgba(20,29,35,0.04)] relative z-10">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-body"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
              <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-body appearance-none">
                <option>Collaboration Opportunity</option>
                <option>Technical Inquiry</option>
                <option>Just saying hello</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
              <textarea 
                placeholder="How can I help with your system architecture?"
                rows={4}
                className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-body resize-none"
              />
            </div>

            <button className="w-full editorial-gradient text-white font-headline font-bold py-5 rounded-xl shadow-lg hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
