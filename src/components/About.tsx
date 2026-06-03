const stats = [
  { value: "10+", label: "lat doświadczenia" },
  { value: "200+", label: "wychowanków" },
  { value: "3", label: "grupy wiekowe" },
  { value: "UEFA B", label: "licencja trenerska" },
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
              Jestem licencjonowanym trenerem piłki nożnej z wieloletnim
              doświadczeniem w pracy z dziećmi i młodzieżą. Moim celem jest
              nie tylko nauka techniki, ale przede wszystkim budowanie
              pewności siebie, pracy zespołowej i zdrowych nawyków sportowych.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Każde dziecko traktuję indywidualnie — dostosowuję metody pracy
              do jego tempa rozwoju i predyspozycji. Treningi są wymagające,
              ale przede wszystkim — fun!
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-2xl font-extrabold text-amber-400">{value}</p>
                  <p className="mt-1 text-xs font-medium text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
