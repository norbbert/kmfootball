export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          KM<span className="text-amber-400">Football</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {[
            { href: "#o-mnie", label: "O mnie" },
            { href: "#oferta", label: "Oferta" },
            { href: "#galeria", label: "Galeria" },
            { href: "#zapisy", label: "Zapisy" },
            { href: "#kontakt", label: "Kontakt" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#zapisy"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-amber-300"
        >
          Zapisz się
        </a>
      </nav>
    </header>
  );
}
