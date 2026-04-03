import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Code, RefreshCw, Package } from 'lucide-react';

// Using Lucide icons that match the Material Symbols in the screenshot
// sync -> RefreshCw
// inventory_2 -> Package

export default function ProjectDetail() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-20"
    >
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface">
            B2B Wholesale Platform
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            End-to-end development of a scalable fullstack application replacing manual processes with an automated digital platform.
          </p>
        </div>
        
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden editorial-shadow bg-surface-container">
          <img 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/dashboard/1920/820" 
            alt="B2B Wholesale Platform Dashboard"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold mb-6 text-on-surface">The Challenge</h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                The primary challenge was modernizing a legacy wholesale operation that relied heavily on manual data entry, physical ledgers, and fragmented communication channels. This manual workflow led to frequent inventory discrepancies and delayed order fulfillment.
              </p>
              <p>
                The transition required more than just a digital interface; it demanded a robust architectural shift to synchronize real-time inventory with financial records while ensuring a secure and user-friendly experience for wholesale buyers.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold mb-8 text-on-surface">Key Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 text-primary">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">100% Data Consistency</h3>
                <p className="text-on-surface-variant">
                  Seamless integration via QuickBooks API ensured that all sales and stock adjustments are reflected in financial reports instantly.
                </p>
              </div>
              
              <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">Inventory Intelligence</h3>
                <p className="text-on-surface-variant">
                  Implemented robust inventory reservation logic and enhanced security protocols using HttpOnly cookies for session management.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold mb-8 text-on-surface">Process & Evolution</h2>
            <div className="bg-surface-container-low rounded-xl p-6 md:p-12">
              <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-sm">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/process/1200/675" 
                  alt="Process and Evolution"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-on-surface-variant leading-relaxed italic">
                "The evolution was focused on transforming manual friction into automated efficiency, creating a single source of truth for the entire business."
              </p>
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-12">
          <div className="bg-surface-container-low p-8 rounded-xl">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6">Stack & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['React (TS)', 'Strapi V5', 'QuickBooks API', 'Webhooks', 'Tailwind CSS'].map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-surface-container-lowest rounded-full font-label text-[10px] text-on-surface-variant border border-on-surface/5">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6">Details</h3>
            <ul className="space-y-4">
              {[
                { label: 'Client', value: 'Wholesale Partners' },
                { label: 'Role', value: 'Fullstack Developer' },
                { label: 'Duration', value: '6 Months' }
              ].map(detail => (
                <li key={detail.label} className="flex justify-between border-b border-on-surface/5 pb-2">
                  <span className="text-on-surface-variant font-label text-xs">{detail.label}</span>
                  <span className="font-body text-sm font-semibold">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-primary text-white flex items-center justify-center gap-2 py-4 rounded-xl font-label text-sm font-bold tracking-tight transition-all hover:opacity-90 editorial-shadow">
              Visit Platform <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </section>

    </motion.div>
  );
}
