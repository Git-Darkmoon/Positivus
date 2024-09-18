import SectionTitle from "../Global/SectionTitle"
import CTA from "./CTA"
import ServicesCard from "./ServicesCard"
import { UUID } from "crypto"

export type ServicesProps = {
  id: UUID
  title: string
  illustration: string
  path: string
}

const services: ServicesProps[] = [
  {
    id: crypto.randomUUID() as UUID,
    title: "Search engine optimization",
    illustration: "/ServicesAssets/SEO.png",
    path: "#",
  },
  {
    id: crypto.randomUUID() as UUID,
    title: "Pay-per-click advertising",
    illustration: "/ServicesAssets/PayPerClick.png",
    path: "#",
  },
  {
    id: crypto.randomUUID() as UUID,
    title: "Social media marketing",
    illustration: "/ServicesAssets/SocialMediaMarketing.png",
    path: "#",
  },
  {
    id: crypto.randomUUID() as UUID,
    title: "Email marketing",
    illustration: "/ServicesAssets/EmailMarketing.png",
    path: "#",
  },
  {
    id: crypto.randomUUID() as UUID,
    title: "Content creation",
    illustration: "/ServicesAssets/ContentCreation.png",
    path: "#",
  },
  {
    id: crypto.randomUUID() as UUID,
    title: "Analytics and Tracking",
    illustration: "/ServicesAssets/Analytics.png",
    path: "#",
  },
]

function Services() {
  return (
    <>
      <SectionTitle
        title="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <section className="services">
        {services.map(({ id, title, illustration, path }) => {
          return (
            <ServicesCard
              key={id}
              id={id}
              title={title}
              illustration={illustration}
              path={path}
            />
          )
        })}
      </section>
      <CTA />
    </>
  )
}
export default Services
