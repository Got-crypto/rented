import { HeroSection, Overview, Services } from "@/components";



export default function Home() {

  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />

        <Overview />

        <Services />

    </div>
  )
}

