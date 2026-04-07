import { useEffect, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Terminal, Sparkles } from 'lucide-react';
import profilePhoto from '../assets/selfy.jpg';

export default function AboutContact() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleEmailClick = (e: MouseEvent) => {
    e.preventDefault();
    const user = 'kingkingpo';
    const domain = 'gmail.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

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
              src={profilePhoto}
              alt="Vincent Shin Portrait"
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
                {['Fullstack Development', 'Database Optimization (JPA, SQL)', 'System Performance', 'System Security'].map(item => (
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
                {['Java', 'React', 'Next.js', 'Spring Boot', 'Strapi', 'JavaFX', 'Angular2'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-surface-container-low rounded-lg font-label text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-surface-container-low rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 editorial-gradient opacity-10 blur-[100px] -mr-48 -mt-48 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 editorial-gradient opacity-10 blur-[100px] -ml-48 -mb-48 rounded-full" />

        <div className="relative z-10 max-w-2xl w-full">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6 block">Contact</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-8">
            Let's connect.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            I'm open to discussing new opportunities, technical collaborations, or system architecture inquiries. Reach out to start a conversation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <button
              onClick={handleEmailClick}
              className="flex flex-col items-center gap-4 group cursor-pointer bg-transparent border-none appearance-none w-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 text-center">Email</p>
                <p className="text-base font-bold group-hover:text-primary transition-colors underline decoration-primary/30 decoration-2 underline-offset-4">Send an Email</p>
              </div>
            </button>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                <MapPin className="w-6 h-6 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 text-center">Location</p>
                <p className="text-base font-bold">Toronto, Canada</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </motion.div>
  );
}
