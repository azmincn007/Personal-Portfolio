"use client"
import { Button } from "@/components/ui/button"

export default function ProjectCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919633531411', '_blank');
  };

  return (
    <div className="dark bg-[#141c3a] px-6 py-12 md:py-14 rounded-xl">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-xl md:text-[32px] font-bold text-white font-space-grotesk">
          Start a project
        </h2>
        <p className="text-[16px] text-white  text-center md:text-center max-w-md">
          Interested in working together? We should queue up a time to chat. I&apos;ll buy the coffee.
        </p>
        <Button 
          variant="outline" 
          className="rounded-full border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-[#141c3a] transition-colors bg-transparent px-12 py-6"
          size="lg"
          onClick={handleWhatsAppClick}
        >
          <span className="mr-2">🤘</span>
          Let&apos;s do this
        </Button>
      </div>
    </div>
  )
}

