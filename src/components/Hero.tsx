'use client';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Radial gradient — subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(39,39,42,0.25)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 md:px-12 lg:px-16">
        {/* Label */}
        <p className="hero-reveal hero-delay-1 text-[11px] tracking-[0.35em] uppercase text-zinc-500 mb-10">
          A product vision
        </p>

        {/* Main heading — massive serif */}
        <h1 className="hero-reveal hero-delay-2 font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight mb-8">
          <span className="text-white">death</span>
          <span className="text-white">2</span>
          <span className="email-strike text-white">email</span>
        </h1>

        {/* Subheading */}
        <p className="hero-reveal hero-delay-3 text-base md:text-lg text-zinc-500 tracking-wide font-light">
          The post-inbox interface
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 hero-reveal hero-delay-4">
        <span className="text-zinc-600 text-sm tracking-[0.2em]">&darr;</span>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
