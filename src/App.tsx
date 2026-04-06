import { Menu, ArrowRight, Linkedin, Instagram, Mail, BookOpen, Music, Users } from 'lucide-react';
import { motion } from 'motion/react';

const clubs = [
  {
    id: 1,
    title: "The Midnight Library",
    category: "Club de Ficción",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
    description: "Lecturas inmersivas de realismo mágico y fantasía urbana en locaciones secretas.",
    tag: "Mensual"
  },
  {
    id: 2,
    title: "Non-Fiction Society",
    category: "Club de Ensayo",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=1200",
    description: "Debates profundos sobre ciencia, filosofía y el futuro de la humanidad.",
    tag: "Bimensual"
  },
  {
    id: 3,
    title: "Classic Vinyl & Verse",
    category: "Experiencia",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200",
    description: "Poesía clásica maridada con jazz en vivo y cata de vinos orgánicos.",
    tag: "Evento Especial"
  }
];

const pastParties = [
  {
    id: 4,
    title: "Gatsby's Silent Reading",
    location: "Mansión del Siglo XIX",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1200",
    description: "Más de 200 personas leyendo en silencio absoluto bajo la luz de las velas."
  },
  {
    id: 5,
    title: "Cyberpunk Book Rave",
    location: "Almacén Industrial",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=1200",
    description: "Donde la literatura distópica se encuentra con el techno ambiental."
  },
  {
    id: 6,
    title: "Botanical Book Brunch",
    location: "Invernadero Real",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    description: "Lectura matutina rodeada de flora exótica y gastronomía de autor."
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-0 font-bold text-xl tracking-tighter">
          <div className="flex flex-col">
            <div className="flex">
              <span className="border border-white w-6 h-6 flex items-center justify-center text-[10px]">R</span>
              <span className="border border-white w-6 h-6 flex items-center justify-center text-[10px]">E</span>
            </div>
            <div className="flex">
              <span className="border border-white w-6 h-6 flex items-center justify-center text-[10px]">A</span>
              <span className="border border-white w-6 h-6 flex items-center justify-center text-[10px]">D</span>
            </div>
          </div>
          <span className="ml-3 uppercase tracking-[0.2em] text-sm hidden sm:block">Holding Co.</span>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-white hover:text-brand-yellow transition-colors hidden md:block">
            <Menu size={24} />
          </button>
          <button className="parallelogram-btn !px-6 !py-2 text-sm uppercase tracking-wider">
            Join a club
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-12 mb-24">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm mb-12">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000" 
              alt="Reading Atmosphere" 
              className="w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end dot-pattern py-12">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
              >
                La lectura es <span className="text-brand-yellow italic">social</span>
              </motion.h1>
              <p className="text-xl text-gray-400 max-w-lg">
                Un holding de experiencias literarias. Desde clubes de nicho hasta 
                fiestas de lectura masivas que redefinen el acto de leer.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-brand-yellow font-bold text-lg">
              <a href="#clubs" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                Nuestros clubes exclusivos <ArrowRight size={20} />
              </a>
              <a href="#parties" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                Próximas fiestas de lectura <ArrowRight size={20} />
              </a>
              <a href="#membership" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                Membresía del holding <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section (New for the Holding) */}
        <section className="px-6 md:px-12 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12">
          <div className="text-center">
            <BookOpen className="mx-auto text-brand-yellow mb-4" size={32} />
            <div className="text-4xl font-bold mb-1 tracking-tighter">12</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Clubes Activos</div>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-brand-yellow mb-4" size={32} />
            <div className="text-4xl font-bold mb-1 tracking-tighter">5k+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Lectores</div>
          </div>
          <div className="text-center">
            <Music className="mx-auto text-brand-yellow mb-4" size={32} />
            <div className="text-4xl font-bold mb-1 tracking-tighter">24</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Fiestas Anuales</div>
          </div>
          <div className="text-center">
            <div className="text-brand-yellow mb-4 text-3xl font-bold">∞</div>
            <div className="text-4xl font-bold mb-1 tracking-tighter">98%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Retención</div>
          </div>
        </section>

        {/* Clubs Section */}
        <section id="clubs" className="px-6 md:px-12 mb-32">
          <h2 className="text-3xl font-bold mb-8 text-gray-500 uppercase tracking-widest text-sm">Nuestras Franquicias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <motion.div 
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={club.image} 
                    alt={club.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-brand-yellow transition-colors">{club.title}</h3>
                  <span className="text-xs text-brand-yellow border border-brand-yellow px-2 py-1 uppercase">{club.tag}</span>
                </div>
                <p className="text-gray-400 mb-4">{club.description}</p>
                <button className="text-brand-yellow flex items-center gap-2 font-bold text-sm">
                  Ver detalles del club <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reading Parties Section */}
        <section id="parties" className="bg-brand-gray/30 py-24 px-6 md:px-12 mb-32 border-y border-white/5">
          <h2 className="text-3xl font-bold mb-12 text-gray-500 uppercase tracking-widest text-sm">Experiencias Pasadas</h2>
          <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar">
            {pastParties.map((party) => (
              <div key={party.id} className="min-w-[300px] md:min-w-[450px] group">
                <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                  <img 
                    src={party.image} 
                    alt={party.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/40">
                    <span className="text-white font-bold text-2xl tracking-tighter border-4 border-white p-4 uppercase text-center">{party.location}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-yellow mb-2">{party.title}</h3>
                <p className="text-gray-400">{party.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className="parallelogram-btn w-full md:w-auto">
              Ver calendario de fiestas 2026 <ArrowRight size={20} className="inline ml-2" />
            </button>
          </div>
        </section>

        {/* Newsletter/Contact Form */}
        <section id="membership" className="px-6 md:px-12 mb-32 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">Membresía</h2>
            <h3 className="text-4xl font-bold mb-6">Sé parte del círculo de lectores más exclusivo.</h3>
            <p className="text-xl text-gray-400 mb-8">
              Recibe invitaciones prioritarias a nuestras fiestas mensuales y acceso a la red de clubes del holding.
            </p>
          </div>
          <div className="bg-brand-gray p-8 rounded-sm">
            <form className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre*" className="bg-brand-dark border border-white/20 p-3 focus:border-brand-yellow outline-none" />
              <input type="text" placeholder="Apellido*" className="bg-brand-dark border border-white/20 p-3 focus:border-brand-yellow outline-none" />
              <input type="email" placeholder="Email*" className="col-span-2 bg-brand-dark border border-white/20 p-3 focus:border-brand-yellow outline-none" />
              <select className="col-span-2 bg-brand-dark border border-white/20 p-3 focus:border-brand-yellow outline-none text-gray-400">
                <option>Interés principal*</option>
                <option>Clubes de Lectura</option>
                <option>Fiestas Mensuales</option>
                <option>Ambos</option>
              </select>
              <div className="col-span-2 flex items-start gap-3 text-xs text-gray-400 mt-4">
                <input type="checkbox" className="mt-1" />
                <p>Acepto recibir notificaciones sobre eventos y lanzamientos de nuevos clubes.</p>
              </div>
              <button type="submit" className="col-span-2 bg-brand-yellow text-black font-bold py-4 mt-4 hover:bg-white transition-colors">
                Solicitar Membresía
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray py-16 px-6 md:px-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <button className="parallelogram-btn mb-8 uppercase tracking-widest text-xs">Contact Us</button>
            <p className="text-gray-500 text-sm">© 2026 READ Holding Co.</p>
          </div>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#" className="hover:text-brand-yellow">Nuestros Clubes</a>
            <a href="#" className="hover:text-brand-yellow">Calendario de Fiestas</a>
            <a href="#" className="hover:text-brand-yellow">Membresía</a>
            <a href="#" className="hover:text-brand-yellow">Blog Literario</a>
          </div>
          <div className="flex flex-col gap-2 text-gray-400">
            <p className="text-white font-bold mb-2">Sedes</p>
            <p>Londres, UK</p>
            <p>Nueva York, USA</p>
            <p>Berlín, DE</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold">Síguenos</p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-brand-yellow"><Linkedin /></a>
              <a href="#" className="hover:text-brand-yellow"><Instagram /></a>
              <a href="#" className="hover:text-brand-yellow"><Mail /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
