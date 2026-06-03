import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offer from "@/components/Offer";
import VideoGallery from "@/components/VideoGallery";
import ZapisyForm from "@/components/ZapisyForm";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <VideoGallery />
        <ZapisyForm />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
