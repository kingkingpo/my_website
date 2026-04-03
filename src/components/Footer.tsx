export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/50">
          © 2024 VS. Built with atmospheric minimalism.
        </p>
        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'Twitter', 'Email'].map(link => (
            <a 
              key={link} 
              href="#" 
              className="text-on-surface-variant/50 font-label text-xs uppercase tracking-widest hover:text-primary underline decoration-2 underline-offset-4 transition-all"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
