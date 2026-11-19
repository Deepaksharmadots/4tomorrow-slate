import HomeHero from "@/components/home/HomeHero";
import SiteFooter from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-surface-navy">
      <main className="d-flex flex-column flex-grow-1">
        <HomeHero />
      </main>
      <SiteFooter />
    </div>
  );
}
