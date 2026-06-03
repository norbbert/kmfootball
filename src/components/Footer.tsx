export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-lg font-bold text-white">
            KM<span className="text-amber-400">Football</span>
          </p>
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} KMFootball. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#o-mnie" className="transition-colors hover:text-white">O mnie</a>
            <a href="#oferta" className="transition-colors hover:text-white">Oferta</a>
            <a href="#kontakt" className="transition-colors hover:text-white">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
