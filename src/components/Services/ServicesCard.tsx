import Image from "next/image"
import Link from "next/link"
import { ServicesProps } from "./Services"
import { ArrowRight } from "lucide-react"

export default function ServicesCard({
  title,
  illustration,
  path,
}: ServicesProps) {
  return (
    <article className="cardTemplate services__card">
      <div className="services__card__information">
        <h3 className="services__card__title">{title}</h3>
        <Link className="services__card__link" href={path}>
          <ArrowRight size={42} className="services__card__link--icon" /> Learn
          more
        </Link>
      </div>
      <div className="services__card__illustration">
        <Image
          className="services__card__image"
          src={illustration}
          alt={title}
          width={210}
          height={210}
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
          priority
        />
      </div>
    </article>
  )
}
