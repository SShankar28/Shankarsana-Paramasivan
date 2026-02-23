export default function Footer() {
    return (
        <section id="contact" className="bg-[#121212] py-24 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 relative z-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter max-w-4xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">
                Let&apos;s Build Something<br />That Works
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                If you&apos;re developing <span className="font-semibold text-white">products, hardware, automation,</span> or <span className="font-semibold text-white">mechanical systems</span>, let&apos;s work together from prototypes to scalable solutions.
            </p>

            <a
                href="mailto:paramasivanshankarsana@gmail.com"
                className="inline-block bg-white text-black font-bold text-base px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-12"
            >
                Let&apos;s Collaborate
            </a>

            <div className="flex gap-8 text-gray-500 font-medium text-sm sm:text-base mb-24">
                <a
                    href="https://www.linkedin.com/in/shankarsana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.instagram.com/shankarsana_?igsh=MWJmc3hpY25zdnZ4ZA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                >
                    Instagram
                </a>
            </div>

            <div className="w-full max-w-4xl border-t border-white/5 pt-8 text-center text-xs sm:text-sm text-gray-600">
                &copy; 2026 Shankarsana Paramasivan. All rights reserved.
            </div>
        </section>
    );
}
