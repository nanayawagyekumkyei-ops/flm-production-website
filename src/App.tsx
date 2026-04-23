import { motion } from 'motion/react';
import { Music, Play, ExternalLink, Headphones, Mic2, Settings2, Star, ChevronRight, Menu, X, Instagram, Twitter, Mail, Phone, MapPin, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- TYPES ---
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: any;
}

interface Beat {
  id: string;
  title: string;
  bpm: string;
  key: string;
  tags: string[];
  price: string;
  category: 'Trap' | 'Afrobeat' | 'Drill' | 'R&B';
}

const SERVICES: Service[] = [
  { id: '1', title: 'Beat Production', description: 'Exclusive and non-exclusive top-tier instrumentals tailored for your vibe.', price: '$49', icon: Music },
  { id: '2', title: 'Mixing & Mastering', description: 'Industry-standard sonic clarity and loudness for your raw vocals.', price: '$99', icon: Settings2 },
  { id: '3', title: 'Vocal Recording', description: 'Record in a high-end acoustic environment with pro gear (U87, CL1B).', price: '$60/hr', icon: Mic2 },
  { id: '4', title: 'Custom Instrumentals', description: 'One-on-one sessions to build a unique sound from the ground up.', price: '$250', icon: Headphones }
];

const BEATS: Beat[] = [
  { id: '1', title: 'Midnight City', bpm: '140', key: 'Cm', tags: ['Melodic', 'Dark'], price: '$29.99', category: 'Trap' },
  { id: '2', title: 'Sun & Moon', bpm: '105', key: 'G#m', tags: ['Summer', 'Groove'], price: '$29.99', category: 'Afrobeat' },
  { id: '3', title: 'Nightmare', bpm: '144', key: 'Dm', tags: ['Aggressive', 'Grimy'], price: '$29.99', category: 'Drill' },
  { id: '4', title: 'Late Night Text', bpm: '90', key: 'Am', tags: ['Smooth', 'Soul'], price: '$29.99', category: 'R&B' },
  { id: '5', title: 'Hustle Hard', bpm: '130', key: 'F#m', tags: ['Piano', 'Epic'], price: '$29.99', category: 'Trap' },
];

const REVIEWS = [
  { name: 'Young K', role: 'Independent Artist', text: 'FLM Production turned my bedroom demo into an absolute club anthem. The mixing is next level.', rating: 5 },
  { name: 'Sasha V', role: 'Singer/Songwriter', text: 'Finally found a producer who understands the R&B pocket. Clean, professional, and fast.', rating: 5 },
  { name: 'Drill King', role: 'Rapper', text: 'Those 808s are dangerous. Best drill beats in the game right now.', rating: 5 },
];

const PRICING_PLANS = [
  { name: 'Basic', price: '$49', features: ['High-Quality WAV/MP3', 'Basic License', '1 Revision', '2-Day Delivery'], cta: 'Get Started' },
  { name: 'Standard', price: '$149', features: ['Track Stems incl.', 'Premium License', '3 Revisions', 'Priority Support'], popular: true, cta: 'Selected Choice' },
  { name: 'Unlimited', price: '$499', features: ['Unlimited Rights', 'Full Commercial Use', 'Unlimited Revisions', '1-on-1 Consult'], cta: 'Go Pro' },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beats', href: '#beats' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-elegant-bg/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-elegant-cyan to-elegant-purple rounded-lg flex items-center justify-center font-black text-black text-xl">F</div>
          <div>
            <h1 className="font-sans font-bold text-xl tracking-tighter leading-none text-white">FLM PRODUCTION</h1>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Industry Standard Engineering</p>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium text-white/60 hover:text-elegant-cyan transition-colors uppercase tracking-widest">{link.name}</a>
          ))}
          <button className="btn-elegant-primary">Book Session</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-elegant-card border-b border-white/10 p-6 flex flex-col gap-6 items-center shadow-2xl"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-white hover:text-elegant-cyan uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
          ))}
          <button className="btn-elegant-primary w-full max-w-xs">Book Session</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-elegant-bg">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-20 grayscale scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-bg via-elegant-bg/80 to-transparent" />
      </div>

      {/* Animated waves/elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1], 
             opacity: [0.05, 0.1, 0.05],
             x: [-20, 20, -20]
           }} 
           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-elegant-cyan/10 rounded-full blur-[120px]" 
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.3, 1], 
             opacity: [0.05, 0.1, 0.05],
             x: [20, -20, 20]
           }} 
           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-elegant-purple/10 rounded-full blur-[120px]" 
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="micro-label mb-6 block text-elegant-cyan">
            Elevate Your Sound
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] max-w-5xl mx-auto text-white tracking-tighter">
            AMATEUR TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">INDUSTRY READY.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Premium custom instrumentals, world-class mixing, and professional mastering for artists ready to dominate the charts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-elegant-outline flex items-center gap-2">
              Listen to Beats
            </button>
            <button className="btn-elegant-secondary flex items-center gap-2">
              Get Started
            </button>
          </div>

          {/* Simple waveform visualizer mock */}
          <div className="mt-20 flex justify-center items-end gap-1 h-12 opacity-40">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] }}
                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, repeatType: 'reverse' }}
                className="w-1 bg-brand-cyan/50 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-elegant-bg relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=1974&auto=format&fit=crop" 
              alt="Founder working" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-8 -right-8 bg-elegant-surface border border-white/10 p-8 rounded-2xl hidden md:block shadow-xl">
            <div className="text-4xl font-black text-elegant-cyan mb-1 tracking-tighter">250+</div>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Artists Trusted Us</div>
          </div>
        </div>

        <div>
           <span className="micro-label mb-4 block">The Mission</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter uppercase leading-none">Sonic <span className="text-elegant-cyan">Excellence.</span></h2>
          <div className="space-y-6 text-white/50 font-medium text-lg">
            <p>
              We don't just "make beats." We craft sonic identities. At FLM Production, our goal is to bridge the gap between independent creativity and major label quality.
            </p>
            <p>
              Founded by producers who have lived in the studio, we know exactly what it takes to make a vocal sit perfectly in a mix and what makes a rhythm undeniable.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-elegant-cyan/20 flex items-center justify-center text-elegant-cyan mt-1">
                <Check size={12} />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1">Pristine Quality</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">32-bit High-Res Audio</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-elegant-cyan/20 flex items-center justify-center text-elegant-cyan mt-1">
                <Check size={12} />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1">Quick Turnaround</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">48-Hour Radio Ready Mix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-elegant-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white uppercase tracking-tighter leading-none">Studio <span className="text-elegant-cyan">Solutions.</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-[11px] font-bold">Standard Setting Audio Engineering</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="elegant-card p-8 group hover:border-elegant-cyan/30 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-elegant-cyan/10 flex items-center justify-center text-elegant-cyan mb-6 group-hover:scale-110 transition-transform">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white uppercase tracking-tight">{s.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed mb-8">
                {s.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div>
                   <div className="text-[9px] uppercase font-bold text-white/20 tracking-widest mb-1">Price Guide</div>
                   <div className="text-white font-black text-lg tracking-tighter">{s.price}</div>
                </div>
                <button className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-elegant-cyan hover:text-black transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeatStore = () => {
  const [activeCategory, setActiveCategory] = useState<'Trap' | 'Afrobeat' | 'Drill' | 'R&B'>('Trap');
  
  const filteredBeats = BEATS.filter(b => b.category === activeCategory);

  return (
    <section id="beats" className="py-24 bg-elegant-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter leading-none">Beat <span className="text-elegant-cyan">Vault.</span></h2>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Licensed for Commercial Use</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Trap', 'Afrobeat', 'Drill', 'R&B'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-elegant-cyan text-black border-elegant-cyan shadow-[0_0_15px_rgba(0,255,209,0.3)]' : 'border-white/10 hover:border-white/30 text-white/40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredBeats.map((beat, idx) => (
            <motion.div 
              key={beat.id}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="elegant-card p-4 md:p-5 flex flex-col md:flex-row items-center gap-6 hover:bg-white/[0.03] group"
            >
              <div className="relative w-full md:w-16 aspect-square rounded-lg overflow-hidden bg-white/5 shrink-0">
                <img 
                  src={`https://picsum.photos/seed/beat-${beat.id}/200/200`} 
                  alt={beat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="text-elegant-cyan fill-current" size={24} />
                </button>
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <h4 className="text-lg font-black text-white uppercase tracking-tight">{beat.title}</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">
                  <span>{beat.bpm} BPM</span>
                  <span>{beat.key}</span>
                </div>
              </div>

              <div className="hidden lg:flex gap-2">
                {beat.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-[9px] uppercase font-black text-white/20 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <div className="text-right">
                   <div className="text-[9px] text-white/20 uppercase font-black tracking-widest mb-1">From</div>
                   <div className="text-xl font-black text-elegant-cyan tracking-tighter">{beat.price}</div>
                </div>
                <button className="btn-elegant-primary py-2 px-8">Buy License</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-display font-black uppercase tracking-[0.2em] text-white/10 mb-16 select-none leading-none">The Artist Voice • The Artist Voice • The Artist Voice</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col"
             >
               <div className="flex gap-1 mb-6 text-brand-cyan">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">"{review.text}"</p>
               <div className="flex items-center gap-4 mt-auto">
                 <div className="w-10 h-10 rounded-full bg-brand-cyan/20 border border-brand-cyan/20 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <div className="font-bold text-white">{review.name}</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest">{review.role}</div>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white italic">Investment <span className="text-brand-cyan">Plans</span></h2>
          <p className="text-slate-400">Scale your production with the right license for your project.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
             <div 
               key={idx}
               className={`p-10 rounded-3xl border ${plan.popular ? 'border-brand-cyan bg-brand-cyan/5 relative shadow-[0_0_30px_rgba(0,242,255,0.05)]' : 'border-white/10 bg-white/[0.02]'} flex flex-col`}
             >
               {plan.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-cyan text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                   Most Popular
                 </div>
               )}
               <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
               <div className="text-4xl font-display font-bold mb-8 text-brand-cyan">{plan.price}</div>
               
               <ul className="space-y-4 mb-12 flex-1">
                 {plan.features.map((feat, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-400 text-sm italic">
                     <Check size={16} className="text-brand-cyan" />
                     {feat}
                   </li>
                 ))}
               </ul>

               <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-cyan text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                 {plan.cta}
               </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="contact" className="py-24 bg-elegant-bg relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white text-black p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
             <div className="bg-red-500 text-white text-[9px] font-black px-2 py-1 rounded">HOT</div>
          </div>
          
          <div className="mb-10 text-center md:text-left">
             <h2 className="text-3xl font-black mb-2 uppercase leading-none text-black">Book Your<br/>Session.</h2>
             <p className="text-[11px] font-bold uppercase tracking-widest text-black/50">Limited weekly slots available.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-black/30">Artist Name</label>
              <input type="text" className="w-full bg-black/5 border-b border-black/10 py-3 text-xs focus:outline-none focus:border-black transition-colors" placeholder="e.g. Young Vision" />
            </div>
            
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-black/30">Email Address</label>
              <input type="email" className="w-full bg-black/5 border-b border-black/10 py-3 text-xs focus:outline-none focus:border-black transition-colors" placeholder="artist@fml.com" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[9px] uppercase font-black tracking-[0.2em] text-black/30">Service</label>
                <select className="w-full bg-black/5 border-b border-black/10 py-3 text-xs focus:outline-none appearance-none cursor-pointer">
                  <option>Mixing & Mastering</option>
                  <option>Beat Production</option>
                  <option>Custom Beat</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase font-black tracking-[0.2em] text-black/30">Budget</label>
                <input type="text" className="w-full bg-black/5 border-b border-black/10 py-3 text-xs focus:outline-none focus:border-black" placeholder="Range" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black tracking-[0.2em] text-black/30">Project Details</label>
              <textarea rows={2} className="w-full bg-black/5 border-b border-black/10 py-3 text-xs focus:outline-none focus:border-black transition-colors resize-none" placeholder="Sound vibe, stems count, etc." />
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest mt-4 hover:scale-[1.02] transition-transform shadow-lg">Submit Request</button>
            <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest opacity-40">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 
              3 Sessions Left This Week
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-elegant-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left items-start">
          <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-elegant-cyan to-elegant-purple rounded-lg flex items-center justify-center font-black text-black text-lg">F</div>
              <span className="font-sans font-black text-xl tracking-tighter text-white">FLM PRODUCTION</span>
            </div>
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-sm mb-6">
              Premium music production and audio engineering services. Making independent artists sound major since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center hover:bg-elegant-cyan hover:text-black transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center hover:bg-elegant-cyan hover:text-black transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center hover:bg-elegant-cyan hover:text-black transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="micro-label mb-8">Navigation</h4>
             <ul className="space-y-4 text-white/40 text-[11px] font-bold uppercase tracking-widest">
               <li><a href="#beats" className="hover:text-elegant-cyan transition-colors">Beats</a></li>
               <li><a href="#services" className="hover:text-elegant-cyan transition-colors">Mixing</a></li>
               <li><a href="#about" className="hover:text-elegant-cyan transition-colors">Story</a></li>
               <li><a href="#contact" className="hover:text-elegant-cyan transition-colors">Reviews</a></li>
             </ul>
          </div>

          <div>
             <h4 className="micro-label mb-8">Contact</h4>
             <ul className="space-y-4 text-white/40 text-[11px] font-bold uppercase tracking-widest">
               <li className="flex items-center justify-center md:justify-start gap-3"><Mail size={14} className="text-elegant-cyan" /> hi@flmproduction.com</li>
               <li className="flex items-center justify-center md:justify-start gap-3"><Phone size={14} className="text-elegant-cyan" /> +1 (555) STUDIO-1</li>
               <li className="flex items-center justify-center md:justify-start gap-3"><MapPin size={14} className="text-elegant-cyan" /> Los Angeles, CA</li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-[10px] text-white/20 uppercase font-black tracking-[0.2em]">
            © 2026 FLM PRODUCTION • ALL RIGHTS RESERVED
          </div>
          <div className="text-[10px] text-white/20 uppercase font-black tracking-[0.2em] flex gap-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-elegant-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeatStore />
        <Testimonials />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
