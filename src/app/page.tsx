import CaseStudies from "@/components/CaseStudies/CaseStudies"
import Hero from "@/components/Hero/Hero"
import Services from "@/components/Services/Services"
import Team from "@/components/Team/Team"
import Testimonials from "@/components/Testimonials/Testimonials"
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess"

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
    </>
  )
}
export default Home
