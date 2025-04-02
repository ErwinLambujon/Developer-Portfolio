import { Approach } from "@/components/approach";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

const Grid = dynamic(
  () => import("../components/grid").then((mod) => mod.Grid),
  {
    ssr: false, // This is crucial - it disables server-side rendering
  }
);

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
