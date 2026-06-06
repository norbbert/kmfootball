export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-20"
    >
      <div className="absolute inset-0 bg-[url('/img/zespol.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1 text-sm font-medium text-zinc-400">
          Szkółka Piłkarska KMFootball
        </span>
        <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          Rozwijaj swój
          <br />
          <span className="text-gold-gradient">talent</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
          Profesjonalne treningi dla dzieci i młodzieży. Budujemy fundamenty
          techniki, taktyki i charakteru, z pasją i indywidualnym podejściem
          do każdego zawodnika.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#zapisy"
            className="rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-black shadow-lg transition-opacity hover:opacity-90"
          >
            Zapisz dziecko
          </a>
          <a
            href="#o-mnie"
            className="rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>
      <a
        href="#o-mnie"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600"
        aria-label="Przewiń w dół"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
