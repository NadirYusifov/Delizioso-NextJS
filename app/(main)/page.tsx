import ChefSection from "@/pages/home/chefsection";
import HeroSection from "@/pages/home/herosection";
// import PopularMenu from "@/pages/home/popularmenu";
import ReserveSection from "@/pages/home/reservesection";
import WelcomeSection from "@/pages/home/welcomesection";
import WorkSection from "@/pages/home/worksection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WelcomeSection />
            {/* <PopularMenu /> */}
            <ReserveSection />
            <ChefSection />
            <WorkSection />
        </main>
    );
}
