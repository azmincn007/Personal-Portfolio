import Details from "@/Pages/Details";
import Footer from "@/Pages/Footer";
import Header from "@/Pages/Header";
import PortfolioIntro from "@/Pages/PortfolioIntro";
import Projects from "@/Pages/Projects";
import Skills from "@/Pages/Skills";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full ">
     <div className="w-[86%] mx-auto ">
    <Header />
    <Details />
   

     </div>
     <PortfolioIntro />

     <div className="w-[86%] mx-auto ">
     <Projects />
     </div>
     <Skills />
     <Footer />
    
    </div>
  );
}
