const steps = [
  {
    num: "1",
    title: "Zadzwoń lub napisz",
    desc: "Skontaktuj się telefonicznie lub przez Instagram. Opowiem o grupach i odpowiem na pytania.",
  },
  {
    num: "2",
    title: "Trening próbny",
    desc: "Zapraszam na bezpłatny trening próbny — bez zobowiązań. Dziecko sprawdza, czy to dla niego.",
  },
  {
    num: "3",
    title: "Dołącz do drużyny",
    desc: "Jeśli wszystko gra — witamy w szkółce! Ustalamy grupę, harmonogram i szczegóły.",
  },
];

export default function ZapisyForm() {
  return (
    <section id="zapisy" className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Dołącz do nas
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Jak się zapisać?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Trzy proste kroki i Twoje dziecko jest na boisku.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <span className="text-5xl font-extrabold text-zinc-800">
                {step.num}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+48604280706"
            className="flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-black shadow-lg transition-opacity hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            604 280 706
          </a>
          <a
            href="https://instagram.com/kmf00tball"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-zinc-700 px-8 py-4 text-base font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @kmf00tball
          </a>
        </div>
      </div>
    </section>
  );
}
