const videos = [
  { src: "/video/trening-1.mp4", poster: "/video/trening-1.jpg", title: "Slalom z piłką" },
  { src: "/video/trening-2.mp4", poster: "/video/trening-2.jpg", title: "Drybling między pachołkami" },
  { src: "/video/trening-3.mp4", poster: "/video/trening-3.jpg", title: "Strzały na bramkę" },
  { src: "/video/trening-4.mp4", poster: "/video/trening-4.jpg", title: "Prowadzenie piłki" },
];

export default function VideoGallery() {
  return (
    <section id="galeria" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Galeria
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Zajrzyj na nasze treningi
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Surowe nagrania z zajęć — prawdziwa atmosfera boiska, dzieciaki w akcji.
            Włącz dźwięk i poczuj klimat treningu.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <div key={video.src} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  preload="none"
                  playsInline
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
