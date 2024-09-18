import Image from "next/image"
import Button from "../Global/Button"
import HeroDescription from "./HeroDescription"
import HeroTitle from "./HeroTitle"
import Companies from "./Companies"

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__information">
          <HeroTitle text="Navigating the digital landscape for success" />
          <HeroDescription text="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation." />
          <Button variant="filled">book a consultation</Button>
        </div>
        <div className="hero__image">
          <Image
            src={"/hero/illustration.png"}
            alt="hero illustration"
            width={500}
            height={500}
          />
        </div>
      </section>
      <Companies />
    </>
  )
}
export default Hero
