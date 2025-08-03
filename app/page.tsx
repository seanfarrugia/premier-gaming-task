import { GamesGrid } from "@/app/components/organisms/games-grid";
import { ScrollToTop } from "@/app/components/atoms/scroll-to-top";

export default function Home() {
  return (
    <main className="md:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        <GamesGrid />
        <ScrollToTop />
    </main>
  );
}
