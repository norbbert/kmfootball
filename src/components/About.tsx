import Image from "next/image";

const stats = [
  { value: "10+", label: "lat kariery" },
  { value: "U19", label: "Reprezentacja Polski" },
  { value: "8", label: "klubów" },
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
  "MKS Polonia Warszawa",
];

export default function About() {
  return (
    <section id="o-mnie" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
              <Image
                src="/img/trener.jpg"
                alt="Krzysztof Możdżonek, trener KMFootball"
                width={1000}
                height={1250}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
              <p className="text-sm font-medium text-zinc-500">Trener</p>
              <p className="mt-1 text-xl font-bold text-white">Krzysztof Możdżonek</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
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
              i młodzieżą. Wiem, czego wymaga droga na wyższy poziom i właśnie
              tego uczę na każdym treningu.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-2xl font-extrabold text-gold-gradient">{value}</p>
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

        {/* Licencja UEFA B */}
        <div className="mt-16 grid items-center gap-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Kwalifikacje
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Licencjonowany trener UEFA B
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Posiadam licencję trenerską{" "}
              <span className="font-medium text-white">UEFA B</span> nadaną przez
              Polski Związek Piłki Nożnej. To gwarancja profesjonalnego,
              bezpiecznego i przemyślanego prowadzenia zajęć z dziećmi.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Oficjalna licencja PZPN / UEFA",
                "Metodyka pracy z dziećmi i młodzieżą",
                "Licencja ważna do 2027 roku",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-zinc-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl">
            <Image
              src="/img/cert.jpeg"
              alt="Licencja trenerska UEFA B, Krzysztof Możdżonek (PZPN)"
              width={1206}
              height={728}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
