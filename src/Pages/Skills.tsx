import { Card, CardContent } from "@/components/ui/card"
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiPrisma } from 'react-icons/si'

export default function Skills() {
  return (
    <div className="min-h-screen mb-40">
      <div className="bg-gradient-to-br from-[#6E07F3] to-[#8F45F9] text-white pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 py-32">
          <h1 className="text-[30px] font-bold font-space-grotesk">
            My Skills
          </h1>
          <p className="text-sm md:text-lg font-[500] leading-relaxed max-w-4xl mx-auto">
            Technologies I work with
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20 mb-20">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "React",
              icon: SiReact,
              color: "#61DAFB"
            },
            {
              title: "Node.js",
              icon: SiNodedotjs,
              color: "#339933"
            },
            {
              title: "MongoDB",
              icon: SiMongodb,
              color: "#47A248"
            },
            {
              title: "Express",
              icon: SiExpress,
              color: "#000000"
            },
            {
              title: "Tailwind CSS",
              icon: SiTailwindcss,
              color: "#06B6D4"
            },
            {
              title: "TypeScript",
              icon: SiTypescript,
              color: "#3178C6"
            },
            {
              title: "Next.js",
              icon: SiNextdotjs,
              color: "#000000"
            },
            {
              title: "Prisma",
              icon: SiPrisma,
              color: "#2D3748"
            },
          ].map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:scale-105 transition-transform">
              <CardContent className="pt-8 pb-6 px-4 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </div>
                <h2 className="text-xl font-bold text-[#141c3a]">{item.title}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

