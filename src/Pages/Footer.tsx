import ProjectCTA from '@/components/Specific/FooterComponent1'
import { Mail, Linkedin, Github, Instagram, Phone } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative">
      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10'>
        <ProjectCTA />
      </div>

      <div className="md:pt-32 pt-48 py-16 bg-gradient-to-br from-[#6E07F3] to-[#8F45F9] w-full h-full flex flex-col items-center justify-center gap-8 text-white">

              
      
      <p className="text-center text-xl font-light tracking-wide text-white/90">
        Living, learning, & leveling up
        <br />
        one day at a time.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/azmincn007"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Github"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/azmin-cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="mailto:azmincn@gmail.com"
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="tel:+919633531411"
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Phone"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2 text-sm text-white/70">
        <p>Handcrafted by me © muhamed azmin</p>
        <div className="flex items-center gap-2">
          <span>Made with</span>
          <span className="font-semibold">Next.js</span>
        </div>
      </div>
      </div>

    </footer>
  )
}

