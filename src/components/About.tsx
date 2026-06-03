const stats = [
  { value: "10+", label: "lat kariery" },
  { value: "U19", label: "Reprezentacja Polski" },
  { value: "8", label: "klubów" },
  { value: "6+", label: "lat od" },
];

const clubs = [
  "Białe Orły W.",
  "Talent Warszawa",
  "Hutnik Warszawa",
  "Orzeł Baniocha",
  "Ursus Warszawa",
  "Victoria Sulejówek",
  "Widzew Łódź",
  "Bzura Chodaków",
];

export default function About() {
  return (
    <section id="o-mnie" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="flex h-full items-center justify-center text-zinc-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
              <p className="text-sm font-medium text-zinc-500">Trener</p>
              <p className="mt-1 text-xl font-bold text-white">KMFootball</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              O mnie
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Pasja do piłki,
              <br />
              miłość do treningu
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Aktywny zawodnik z ponad 10-letnim stażem w polskim futbolu.
              Grałem m.in. w <span className="text-white font-medium">Widzewie Łódź</span> i{" "}
              <span className="text-white font-medium">Hutniku Warszawa</span>, a swój
              potencjał potwierdziłem powołaniami do{" "}
              <span className="text-white font-medium">Reprezentacji Polski U18 i U19</span>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Boiskowe doświadczenie przekładam bezpośrednio na pracę z dziećmi
              i młodzieżą. Wiem, czego wymaga droga na wyższy poziom — i dokładnie
              tego uczę na każdym treningu.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-2xl font-extrabold text-amber-400">{value}</p>
                  <p className="mt-1 text-xs font-medium text-zinc-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-3">Kariera zawodnicza</p>
              <div className="flex flex-wrap gap-2">
                {clubs.map((club) => (
                  <span key={club} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
