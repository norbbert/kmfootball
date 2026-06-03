"use client";

import { useState } from "react";

const links = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#oferta", label: "Oferta" },
  { href: "#galeria", label: "Galeria" },
  { href: "#zapisy", label: "Zapisy" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          KM<span className="text-gold-gradient">Football</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {links.map(({ href, label }) => (
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
          className="hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:block"
        >
          Zapisz się
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#zapisy"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                Zapisz się
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
