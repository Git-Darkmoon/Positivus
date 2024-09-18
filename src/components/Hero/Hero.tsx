import HeroDescription from "./HeroDescription"
import HeroTitle from "./HeroTitle"

function Hero() {
  return (
    <section className="hero">
      <div className="hero__information">
        <HeroTitle text="Navigating the digital landscape for success" />
        <HeroDescription text="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation." />
      </div>
      <div className="hero__image"></div>
    </section>
  )
}
export default Hero
