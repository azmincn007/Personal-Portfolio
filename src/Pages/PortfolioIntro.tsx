import { Card, CardContent } from "@/components/ui/card"
import { Layers, Code, BookOpen } from 'lucide-react'

export default function PortfolioIntro() {
  return (
    <div className="min-h-screen  ">
      <div className="bg-gradient-to-br from-[#6E07F3] to-[#8F45F9] text-white pb-8  px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 py-32">
          <h1 className="text-[30px]  font-bold font-space-grotesk">
            Hi, I&apos;m Azmin. Nice to meet you.
          </h1>
          <p className="text-sm md:text-lg font-[500] leading-relaxed max-w-4xl mx-auto">
            With 1.5 years of experience in both frontend and backend development, I&apos;ve had the opportunity to collaborate on various projects, including e-commerce and event management platforms. I&apos;m excited to continue learning and growing as a developer.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20 ">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Designer",
              icon: Layers,
              description:
                "I value simple content structure, clean design patterns, and thoughtful interactions.",
            },
            {
              title: "Frontend Developer",
              icon: Code,
              description:
                "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
            },
            {
              title: "Backend Developer",
              icon: BookOpen,
              description:
                "I specialize in building robust server-side applications and APIs with a focus on scalability and performance.",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-8 pb-6 px-4 text-center">
                <div className="w-16 h-16 bg-[#5BE9B9] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#6E07F3]" />
                </div>
                <h2 className="text-xl font-bold mb-4 text-[#141c3a]">{item.title}</h2>
                <p className="text-black text-md leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

