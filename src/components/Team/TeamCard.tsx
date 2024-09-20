import Image from "next/image"
import { TeamMember } from "./Team"

function TeamCard({ memberInfo }: { memberInfo: TeamMember }) {
  const { img, name, role, description } = memberInfo

  return (
    <article className="cardTemplate team__card">
      <header className="team__card__header">
        <Image
          className="team__card__header--image"
          src={img}
          alt={name}
          width={100}
          height={100}
        />
        <div>
          <h2>{name}</h2>
          <h4>{role}</h4>
        </div>
      </header>
      <div className="separator"></div>
      <p>{description}</p>
    </article>
  )
}
export default TeamCard
