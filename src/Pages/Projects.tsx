import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function PortfolioGrid() {
  const projects = [
    {
      title: "Guestify",
      description: "An event creation platform connecting organizations and guests seamlessly. Simplify event planning and invitation management.",
      image: "/assets/guestifylogo.png",
      gradient: "bg-gradient-to-br from-red-500 to-red-600",
      cta: "Explore Platform →",
      ctaLink: "#"
    },
    {
      title: "Wonderland",
      description: "A modern movie ticket and seat booking platform. Seamlessly browse movies, select seats, and book your cinema experience with real-time availability.",
      image: "/assets/wonderland.png",
      gradient: "bg-gradient-to-br from-[#b0195e] to-[#d81f72]",
      cta: "Book Movies →",
      ctaLink: "#"
    },

  ]

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">My Recent Work</h2>
        <p className="text-lg text-gray-600">
          Here are a few past design projects I've worked on. Want to see more?{' '}
          <Link href="mailto:example@email.com" className="text-blue-500 hover:text-blue-600">
            Email me
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="overflow-hidden relative group"
          >
            <div className="relative w-full h-[287px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-10"
                priority={index === 0}
                quality={100}
              />
            </div>
            
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.gradient}`} />

            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <p className="text-base mb-4">{project.description}</p>
                {project.cta && (
                  <Link 
                    href={project.ctaLink || '#'} 
                    className="inline-flex items-center justify-center px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-navy-900 transition-colors"
                  >
                    {project.cta}
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

