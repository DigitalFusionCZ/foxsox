'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Fox Sox - Elegance pro vaše nohy";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4AF37" /><stop offset="100%" stop-color="#1A1A1A" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200 font-sans">
      <header className="fixed w-full z-50 bg-[#1A1A1A] bg-opacity-90 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-serif text-[#D4AF37] font-bold tracking-wider">
            Fox Sox
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Úvod</a>
            <a href="#about" className="text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">O nás</a>
            <a href="#services" className="text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Produkty</a>
            <a href="#contact" className="text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-[#D4AF37] focus:outline-none focus:text-[#D4AF37]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1A1A1A] py-4`}>
          <a href="#hero" onClick={closeMenu} className="block px-6 py-2 text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Úvod</a>
          <a href="#about" onClick={closeMenu} className="block px-6 py-2 text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">O nás</a>
          <a href="#services" onClick={closeMenu} className="block px-6 py-2 text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Produkty</a>
          <a href="#contact" onClick={closeMenu} className="block px-6 py-2 text-lg text-gray-300 hover:text-[#D4AF37] transition duration-300 font-serif">Kontakt</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549298403-12461014e365?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative z-10 p-8">
            <h1 className="text-6xl md:text-8xl font-serif text-[#D4AF37] leading-tight mb-6 animate-fade-in-up">
              Fox Sox
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
              Elegance a pohodlí pro vaše nohy.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#1A1A1A]">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-serif text-[#D4AF37] text-center mb-12">O nás</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1490367532205-d069677353f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Fox Sox" className="rounded-lg shadow-xl w-full h-80 object-cover" />
              </div>
              <div className="w-full md:w-1/2 text-lg leading-relaxed text-gray-300">
                <p className="mb-4">Vítejte ve světě Fox Sox, kde se snoubí prvotřídní kvalita s bezkonkurenčním designem. Jsme hrdí na to, že přinášíme ponožky, které nejen skvěle vypadají, ale také nabízejí maximální komfort po celý den.</p>
                <p>Naše filozofie spočívá v důrazu na detail, výběr nejlepších materiálů a inovativní přístup k módě. V Fox Sox věříme, že ponožky nejsou jen nezbytností, ale vyjádřením osobního stylu a elegance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Products Section */}
        <section id="services" className="py-20 bg-[#121212]">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-serif text-[#D4AF37] text-center mb-12">Naše Produkty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl text-center">
                <h3 className="text-3xl font-serif text-[#C0C0C0] mb-4">Luxusní bavlněné ponožky</h3>
                <p className="text-gray-400 leading-relaxed">Vyrobeno z nejjemnější egyptské bavlny pro celodenní pohodlí a prodyšnost. Ideální pro každodenní nošení s nádechem elegance.</p>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl text-center">
                <h3 className="text-3xl font-serif text-[#C0C0C0] mb-4">Ponožky z merino vlny</h3>
                <p className="text-gray-400 leading-relaxed">Perfektní pro chladné dny, merino vlna reguluje teplotu a odvádí vlhkost, udržující vaše nohy v teple a suchu.</p>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl text-center">
                <h3 className="text-3xl font-serif text-[#C0C0C0] mb-4">Sportovní ponožky Premium</h3>
                <p className="text-gray-400 leading-relaxed">S podporou klenby a extra tlumením pro maximální výkon a pohodlí při sportovních aktivitách.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#1A1A1A]">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-serif text-[#D4AF37] text-center mb-12">Kontaktujte nás</h2>
            <div className="text-center text-lg text-gray-300 leading-relaxed">
              <p className="mb-2">Máte dotazy nebo si přejete objednat naše exkluzivní ponožky?</p>
              <p className="mb-2">Napište nám nebo zavolejte.</p>
              <p className="mt-6 text-xl text-[#C0C0C0]">Email: info@foxsox.cz</p>
              <p className="text-xl text-[#C0C0C0]">Telefon: +420 777 123 456</p>
              <p className="text-xl text-[#C0C0C0]">Adresa: Ponožková 10, Praha, 100 00</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">DigitalFusion</a>
      </footer>
    </div>
  );
}
