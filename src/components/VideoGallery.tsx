const videos = [
  { id: "dQw4w9WgXcQ", title: "Trening techniczny – rocznik 2017" },
  { id: "dQw4w9WgXcQ", title: "Mecz pokazowy – U12" },
  { id: "dQw4w9WgXcQ", title: "Ćwiczenia z piłką – maluchy" },
  { id: "dQw4w9WgXcQ", title: "Turniej letni 2024" },
];

export default function VideoGallery() {
  return (
    <section id="galeria" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Galeria
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Zajrzyj na nasze treningi
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Nagrania z zajęć, turniejów i codziennej pracy na boisku.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {videos.map((video, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-zinc-400">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
