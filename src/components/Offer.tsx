const groups = [
  {
    age: "U8 – U10",
    title: "Maluchy",
    desc: "Wprowadzenie do piłki nożnej poprzez zabawę. Nauka podstawowych elementów technicznych, koordynacji i ruchu z piłką.",
    days: "Wtorek & Czwartek",
    time: "16:00 – 17:00",
  },
  {
    age: "U11 – U13",
    title: "Juniorzy",
    desc: "Rozbudowa techniki indywidualnej, wprowadzenie taktyki grupowej, pierwsze turnieje i mecze. Intensywniejsza praca.",
    days: "Poniedziałek & Środa",
    time: "17:00 – 18:30",
  },
  {
    age: "U14 – U16",
    title: "Seniorzy Młodzikowi",
    desc: "Zaawansowane ćwiczenia taktyczne, analiza wideo, przygotowanie motoryczne i mentalne. Skupienie na meczu.",
    days: "Wtorek, Czwartek & Sobota",
    time: "18:30 – 20:00",
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Grupy treningowe
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Znajdź grupę dla siebie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Każda grupa to dopasowany program treningowy, dostosowany do wieku
            i poziomu zaawansowania zawodników.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.age}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/5"
            >
              <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
                {g.age}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">{g.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">{g.desc}</p>
              <div className="mt-6 space-y-2 border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {g.days}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {g.time}
                </div>
              </div>
              <a
                href="#zapisy"
                className="mt-6 block w-full rounded-full bg-zinc-800 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-amber-400 hover:text-black"
              >
                Zapisz się
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
