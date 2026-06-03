const training = [
  "Technika indywidualna – prowadzenie, podania, przyjęcia, strzał",
  "Koordynacja ruchowa i praca z piłką",
  "Podstawy taktyki i gry zespołowej",
  "Rozwój przez zabawę i pozytywną rywalizację",
  "Budowanie pewności siebie i nawyków sportowych",
];

const facts = [
  {
    label: "Wiek",
    value: "od 6 lat",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    label: "Miejsce",
    value: "Orlik, ul. Przasnyska 18A",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    label: "Harmonogram",
    value: "ustalany indywidualnie",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: "Trening próbny",
    value: "bezpłatny, bez zobowiązań",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Treningi
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Zajęcia dla dzieci od 6 lat
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Jedna grupa, indywidualne podejście do każdego zawodnika. Program
            dopasowany do wieku i poziomu — od pierwszych kroków z piłką po
            zaawansowaną technikę.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Co ćwiczymy */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:col-span-3">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              6+ lat
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">Co ćwiczymy na treningach</h3>
            <ul className="mt-6 space-y-3">
              {training.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-zinc-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#zapisy"
              className="mt-8 inline-block rounded-full bg-gold-gradient px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Zapisz dziecko
            </a>
          </div>

          {/* Szybkie fakty */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">{f.label}</p>
                  <p className="font-semibold text-white">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
